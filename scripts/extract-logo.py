from PIL import Image
from pathlib import Path

src = Path(
    r'C:\Users\Eng Ahmed\.cursor\projects\d-let-s-get-started-main\assets\image-08230db0-2ac0-46a0-849f-7ede608ac7bc.png'
)
out = Path(r'd:\الشغل\موقع الخدمات\let-s-get-started-main\public')
im = Image.open(src).convert('RGBA')
w, h = im.size
third = w // 3

panels = {
    'left': im.crop((0, 0, third, h)),
    'mid': im.crop((third, 0, third * 2, h)),
    'right': im.crop((third * 2, 0, w, h)),
}


def trim(img: Image.Image, pad: int = 8, alpha_thresh: int = 10) -> Image.Image:
    a = img.split()[-1]
    bbox = a.point(lambda p: 255 if p > alpha_thresh else 0).getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    return img.crop((l, t, r, b))


def make_transparent_near(img: Image.Image, bg_colors, tol: int = 28) -> Image.Image:
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            for br, bg, bb in bg_colors:
                if abs(r - br) <= tol and abs(g - bg) <= tol and abs(b - bb) <= tol:
                    pixels[x, y] = (r, g, b, 0)
                    break
    return img


left = make_transparent_near(
    panels['left'].copy(),
    [(0, 0, 0), (5, 5, 5), (10, 10, 10)],
    tol=35,
)
left = trim(left, pad=4)
left.save(out / 'logo-lockup-dark.png')

mid = make_transparent_near(
    panels['mid'].copy(),
    [(47, 70, 56), (42, 65, 50), (55, 80, 62), (35, 55, 45), (30, 50, 40)],
    tol=42,
)
mid = trim(mid, pad=4)
mid.save(out / 'logo-lockup-light.png')
mid.save(out / 'logo-lockup.png')

right = make_transparent_near(
    panels['right'].copy(),
    [(0, 0, 0), (8, 8, 8), (15, 15, 15)],
    tol=30,
)
right = trim(right, pad=2)
side = max(right.width, right.height)
sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
sq.paste(right, ((side - right.width) // 2, (side - right.height) // 2), right)
sq.save(out / 'logo.png')

for name in ['logo.png', 'logo-lockup-light.png', 'logo-lockup-dark.png', 'logo-lockup.png']:
    im2 = Image.open(out / name)
    print(name, im2.size, im2.mode)
