"""Extract colored circular mark (dark green + brown) for light backgrounds."""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(
    r"C:\Users\Eng Ahmed\.cursor\projects\d-let-s-get-started-main\assets\image-e68310d2-549a-49d2-98ae-4379203d6ff3.png"
)
PUBLIC = Path(__file__).resolve().parents[1] / "public"


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    w, h = im.size
    # Left cream panel (colored lockup)
    panel = im.crop((int(w * 0.02), int(h * 0.05), int(w * 0.34), int(h * 0.95)))
    arr = np.array(panel)
    rgb = arr[:, :, :3].astype(np.int16)

    # cream bg -> transparent
    cream = (rgb[:, :, 0] > 200) & (rgb[:, :, 1] > 200) & (rgb[:, :, 2] > 190)
    alpha = np.where(cream, 0, 255).astype(np.uint8)
    soft = (rgb[:, :, 0] > 185) & (rgb[:, :, 1] > 185) & (rgb[:, :, 2] > 175) & (~cream)
    alpha = np.where(soft, 90, alpha)
    arr[:, :, 3] = alpha
    lockup = Image.fromarray(arr, "RGBA")

    a = np.array(lockup)
    ys, xs = np.where(a[:, :, 3] > 40)
    pad = 10
    crop = lockup.crop(
        (
            max(int(xs.min()) - pad, 0),
            max(int(ys.min()) - pad, 0),
            min(int(xs.max()) + pad + 1, a.shape[1]),
            min(int(ys.max()) + pad + 1, a.shape[0]),
        )
    )

    # Icon only: top portion (before Arabic text)
    cw, ch = crop.size
    icon = crop.crop((0, 0, cw, int(ch * 0.52)))
    ia = np.array(icon)
    ys, xs = np.where(ia[:, :, 3] > 40)
    pad = 16
    icon = icon.crop(
        (
            max(int(xs.min()) - pad, 0),
            max(int(ys.min()) - pad, 0),
            min(int(xs.max()) + pad + 1, icon.width),
            min(int(ys.max()) + pad + 1, icon.height),
        )
    )

    side = max(icon.size) + 24
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(
        icon,
        ((side - icon.size[0]) // 2, (side - icon.size[1]) // 2),
        icon,
    )
    canvas = canvas.resize((512, 512), Image.Resampling.LANCZOS)

    # Keep existing light mark if present
    light_src = PUBLIC / "logo.png"
    light_dst = PUBLIC / "logo-light.png"
    if light_src.exists() and not light_dst.exists():
        Image.open(light_src).save(light_dst)
    elif light_src.exists():
        # overwrite light with current white mark only if it looks light
        cur = Image.open(light_src).convert("RGBA")
        px = [
            cur.getpixel((x, y))
            for y in range(0, cur.height, 40)
            for x in range(0, cur.width, 40)
            if cur.getpixel((x, y))[3] > 200
        ]
        if px:
            avg = sum(p[0] + p[1] + p[2] for p in px) / (3 * len(px))
            if avg > 160:
                cur.save(light_dst)

    out = PUBLIC / "logo.png"
    canvas.save(out, "PNG")
    print("saved colored mark", out, canvas.size)
    print("light mark", light_dst, light_dst.exists())


if __name__ == "__main__":
    main()
