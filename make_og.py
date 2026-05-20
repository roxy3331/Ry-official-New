from PIL import Image, ImageDraw, ImageFont
import os, shutil

BASE = r"C:\Users\MY PC\Documents\RY-OFFICIAL WEBSTIE"

# ── OG Preview Image ─────────────────────────
W, H = 1200, 630
img = Image.new("RGB", (W, H), (13, 13, 13))
draw = ImageDraw.Draw(img)

for x in range(300):
    r = int(204 * (1 - x / 300))
    draw.line([(x, 0), (x, H)], fill=(r, 0, 0))

try:
    fb = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 72)
    fm = ImageFont.truetype("C:/Windows/Fonts/arial.ttf",   34)
    fs = ImageFont.truetype("C:/Windows/Fonts/arial.ttf",   26)
except Exception:
    fb = fm = fs = ImageFont.load_default()

logo = Image.open(os.path.join(BASE, "Assets", "ry-logo.png")).convert("RGBA")
logo = logo.resize((120, 120), Image.LANCZOS)
img.paste(logo, (80, 70), logo)

draw.text((80, 220), "RY-OFFICIAL",                              fill=(255, 255, 255), font=fb)
draw.text((80, 310), "Pakistan's #1 PUBG UC & Accounts Store",  fill=(204,  51,  51), font=fm)
draw.text((82, 365), "Instant Delivery  |  Zero Fraud  |  Best PAK Rates", fill=(136, 136, 136), font=fs)
draw.rectangle([(0, H - 5), (W, H)], fill=(204, 51, 51))
draw.ellipse([(880, 80), (1280, 480)], outline=(204, 51, 51), width=2)

dst = os.path.join(BASE, "Assets", "og-preview.jpg")
img.save(dst, "JPEG", quality=90)
print("OG image:", os.path.getsize(dst) // 1024, "KB")

# ── Remove unused frames folder ───────────────
frames_dir = os.path.join(BASE, "frames")
if os.path.exists(frames_dir):
    shutil.rmtree(frames_dir)
    print("frames/ folder removed")
else:
    print("frames/ already gone")

print("All done!")
