"""Extract circular-friendly mark from right app-icon panel of brand sheet."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(
    r"C:\Users\Eng Ahmed\.cursor\projects\d-let-s-get-started-main\assets\image-e68310d2-549a-49d2-98ae-4379203d6ff3.png"
)
OUT = Path(__file__).resolve().parents[1] / "public" / "logo.png"


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    # Right third of sheet (app icon on dark green squircle)
    w, h = im.size
    panel = im.crop((int(w * 0.66), int(h * 0.08), int(w * 0.98), int(h * 0.92)))
    arr = np.array(panel)
    rgb = arr[:, :, :3].astype(np.int16)

    # Find dark-green filled squircle roughly
    dark = (
        (rgb[:, :, 0] < 80)
        & (rgb[:, :, 1] < 105)
        & (rgb[:, :, 2] < 95)
        & (rgb[:, :, 1] > 35)
    )
    ys, xs = np.where(dark)
    x0, x1 = int(xs.min()), int(xs.max())
    y0, y1 = int(ys.min()), int(ys.max())
    # square crop of the green tile
    side = max(x1 - x0, y1 - y0)
    cx = (x0 + x1) // 2
    cy = (y0 + y1) // 2
    half = side // 2
    sx0 = max(cx - half, 0)
    sy0 = max(cy - half, 0)
    sx1 = min(sx0 + side, arr.shape[1])
    sy1 = min(sy0 + side, arr.shape[0])
    tile = arr[sy0:sy1, sx0:sx1].copy()

    # Make near-green transparent; keep logo artwork (white + brown)
    trgb = tile[:, :, :3].astype(np.int16)
    dist = (
        np.abs(trgb[:, :, 0] - 48)
        + np.abs(trgb[:, :, 1] - 66)
        + np.abs(trgb[:, :, 2] - 58)
    )
    alpha = np.where(dist < 48, 0, 255).astype(np.uint8)
    soft = (dist >= 48) & (dist < 78)
    alpha = np.where(soft, ((dist - 48) / 30 * 255).astype(np.uint8), alpha)
    tile[:, :, 3] = alpha
    mark = Image.fromarray(tile, "RGBA")

    # Tight content bbox + square canvas
    a = np.array(mark)
    ys, xs = np.where(a[:, :, 3] > 30)
    pad = 18
    bx0 = max(int(xs.min()) - pad, 0)
    bx1 = min(int(xs.max()) + pad + 1, a.shape[1])
    by0 = max(int(ys.min()) - pad, 0)
    by1 = min(int(ys.max()) + pad + 1, a.shape[0])
    icon = mark.crop((bx0, by0, bx1, by1))
    side = max(icon.size)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(icon, ((side - icon.size[0]) // 2, (side - icon.size[1]) // 2), icon)
    # Upscale for crisp header use
    canvas = canvas.resize((512, 512), Image.Resampling.LANCZOS)
    canvas.save(OUT, "PNG")
    print("saved", OUT, canvas.size, OUT.stat().st_size)


if __name__ == "__main__":
    main()
