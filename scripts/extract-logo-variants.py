"""Extract Saedni light/dark lockups + mark from brand sheet."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(
    r"C:\Users\Eng Ahmed\.cursor\projects\d-let-s-get-started-main\assets\image-e68310d2-549a-49d2-98ae-4379203d6ff3.png"
)
OUT = Path(__file__).resolve().parents[1] / "public"


def smooth(a: np.ndarray, k: int = 15) -> np.ndarray:
    return np.convolve(a, np.ones(k) / k, mode="same")


def ranges_from_mask(mask: np.ndarray) -> list[tuple[int, int]]:
    out: list[tuple[int, int]] = []
    start = None
    for i, v in enumerate(mask):
        if v and start is None:
            start = i
        if not v and start is not None:
            out.append((start, i - 1))
            start = None
    if start is not None:
        out.append((start, len(mask) - 1))
    return out


def bbox_content(arr: np.ndarray, bg_kind: str) -> tuple[int, int, int, int]:
    """Tight crop around non-background content."""
    rgb = arr[:, :, :3].astype(np.int16)
    if bg_kind == "dark":
        # keep pixels that are NOT dark forest green
        bg = (rgb[:, :, 0] < 75) & (rgb[:, :, 1] < 100) & (rgb[:, :, 2] < 90) & (rgb[:, :, 1] > 35)
        content = ~bg
    else:
        # cream / light grey
        bg = (rgb[:, :, 0] > 200) & (rgb[:, :, 1] > 200) & (rgb[:, :, 2] > 190)
        content = ~bg
    ys, xs = np.where(content)
    if len(xs) == 0:
        return 0, 0, arr.shape[1], arr.shape[0]
    pad = 12
    x0 = max(int(xs.min()) - pad, 0)
    x1 = min(int(xs.max()) + pad + 1, arr.shape[1])
    y0 = max(int(ys.min()) - pad, 0)
    y1 = min(int(ys.max()) + pad + 1, arr.shape[0])
    return x0, y0, x1, y1


def make_transparent(crop: Image.Image, bg_kind: str) -> Image.Image:
    arr = np.array(crop.convert("RGBA"))
    rgb = arr[:, :, :3].astype(np.int16)
    if bg_kind == "dark":
        # forest green / near-black -> transparent
        dist = np.abs(rgb[:, :, 0] - 48) + np.abs(rgb[:, :, 1] - 66) + np.abs(rgb[:, :, 2] - 58)
        also_black = (rgb[:, :, 0] < 40) & (rgb[:, :, 1] < 45) & (rgb[:, :, 2] < 40)
        alpha = np.where((dist < 55) | also_black, 0, 255).astype(np.uint8)
        # soft edge
        soft = (dist >= 55) & (dist < 90) & (~also_black)
        alpha = np.where(soft, ((dist - 55) / 35 * 255).astype(np.uint8), alpha)
    else:
        dist = np.abs(rgb[:, :, 0] - 236) + np.abs(rgb[:, :, 1] - 235) + np.abs(rgb[:, :, 2] - 231)
        alpha = np.where(dist < 40, 0, 255).astype(np.uint8)
        soft = (dist >= 40) & (dist < 70)
        alpha = np.where(soft, ((dist - 40) / 30 * 255).astype(np.uint8), alpha)
    arr[:, :, 3] = alpha
    return Image.fromarray(arr, "RGBA")


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    arr = np.array(im)
    rgb = arr[:, :, :3].astype(np.int16)

    dark = (
        (rgb[:, :, 0] < 70)
        & (rgb[:, :, 1] < 95)
        & (rgb[:, :, 2] < 85)
        & (rgb[:, :, 1] > 40)
    )
    cream = (rgb[:, :, 0] > 210) & (rgb[:, :, 1] > 210) & (rgb[:, :, 2] > 200)

    col_dark = smooth(dark.mean(axis=0), 21)
    col_cream = smooth(cream.mean(axis=0), 21)
    dark_ranges = [r for r in ranges_from_mask(col_dark > 0.22) if r[1] - r[0] > 80]
    cream_ranges = [r for r in ranges_from_mask(col_cream > 0.35) if r[1] - r[0] > 80]
    print("dark_ranges", dark_ranges)
    print("cream_ranges", cream_ranges)

    # Vertical bounds from overall content density
    row_any = smooth(((~cream) | dark).mean(axis=1), 15)
    y_ranges = [r for r in ranges_from_mask(row_any > 0.08) if r[1] - r[0] > 120]
    y0, y1 = y_ranges[0] if y_ranges else (40, arr.shape[0] - 40)
    print("y", y0, y1)

    # Left = cream panel (dark lockup), middle = first large dark panel (light lockup),
    # right = last dark panel (app icon / mark)
    left = cream_ranges[0] if cream_ranges else (20, 320)
    # pick two largest dark ranges as middle + right
    dark_sorted = sorted(dark_ranges, key=lambda r: r[1] - r[0], reverse=True)[:2]
    dark_sorted = sorted(dark_sorted, key=lambda r: r[0])
    mid = dark_sorted[0] if dark_sorted else (340, 640)
    right = dark_sorted[1] if len(dark_sorted) > 1 else (700, 980)
    print("panels", left, mid, right)

    jobs = [
        ("logo-lockup-dark.png", left, "cream", True),
        ("logo-lockup-light.png", mid, "dark", True),
        ("logo.png", right, "dark", False),  # mark only — will crop icon area
    ]

    for name, (x0, x1), kind, full_lockup in jobs:
        panel = arr[y0:y1, x0 : x1 + 1]
        bx0, by0, bx1, by1 = bbox_content(panel, kind)
        cropped = Image.fromarray(panel[by0:by1, bx0:bx1], "RGBA")
        transparent = make_transparent(cropped, kind)

        if not full_lockup:
            # keep upper portion (icon) for mark — drop SAEDNI text if present
            w, h = transparent.size
            # content bbox of opaque pixels
            a = np.array(transparent)
            ys, xs = np.where(a[:, :, 3] > 40)
            if len(ys):
                # icon is roughly top 55-65% of lockup; for right panel it's icon-only already
                # If aspect is tall with text, trim bottom text band
                cy0, cy1 = int(ys.min()), int(ys.max())
                content_h = cy1 - cy0 + 1
                # if taller than wide, likely includes text — keep top square-ish
                if content_h > w * 1.15:
                    cut = cy0 + int(w * 1.05)
                    transparent = transparent.crop((0, 0, w, min(cut, h)))
            # circular-friendly square pad
            a = np.array(transparent)
            ys, xs = np.where(a[:, :, 3] > 40)
            if len(ys):
                pad = 8
                sx0 = max(int(xs.min()) - pad, 0)
                sx1 = min(int(xs.max()) + pad + 1, a.shape[1])
                sy0 = max(int(ys.min()) - pad, 0)
                sy1 = min(int(ys.max()) + pad + 1, a.shape[0])
                icon = transparent.crop((sx0, sy0, sx1, sy1))
                side = max(icon.size)
                canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
                ox = (side - icon.size[0]) // 2
                oy = (side - icon.size[1]) // 2
                canvas.paste(icon, (ox, oy), icon)
                transparent = canvas

        out_path = OUT / name
        transparent.save(out_path, "PNG")
        print("saved", out_path.name, transparent.size, out_path.stat().st_size)


if __name__ == "__main__":
    main()
