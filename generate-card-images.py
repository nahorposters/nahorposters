#!/usr/bin/env python3
"""
generate-card-images.py
------------------------
Run this ONCE (and again any time you add new poster images) from the
folder that contains your site's `images/` directory — same as
generate-lqip.py, which this complements.

Your source images in `images/` are full print-resolution files
(often 3000px+ wide). That's exactly what Quick View's zoomed gallery
needs — but the homepage grid (product cards, collection boxes,
design-your-own tiles) only ever displays them a few hundred pixels
wide. Loading the multi-hundred-KB original for a small scrolling
card is what causes cards to flash blank or fail to load in time
during a fast scroll/swipe.

This script creates a matching `images/card/<same-filename>` for every
image in `images/` — resized down to a width that's still crisp on
retina screens but a fraction of the file size. index.html's
`cardSrc()` helper points every homepage grid image at this folder;
Quick View is untouched and keeps loading the full original.

Usage:
    pip install Pillow
    python3 generate-card-images.py

Safe to re-run: it skips any file that already has an up-to-date
card image, so subsequent runs only process newly added images.
"""

import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with:  pip install Pillow")
    sys.exit(1)

SRC_DIR = "images"          # folder with your full-resolution poster images
OUT_DIR = os.path.join(SRC_DIR, "card")
TARGET_WIDTH = 640           # ~2x a typical rendered card width — crisp on retina, tiny vs the original
QUALITY = 72

VALID_EXT = (".webp", ".jpg", ".jpeg", ".png")


def main():
    if not os.path.isdir(SRC_DIR):
        print(f"Couldn't find a '{SRC_DIR}' folder here. Run this script from your")
        print("site's root (the folder that contains index.html and images/).")
        sys.exit(1)

    os.makedirs(OUT_DIR, exist_ok=True)

    processed = 0
    skipped = 0
    failed = 0

    for name in sorted(os.listdir(SRC_DIR)):
        src_path = os.path.join(SRC_DIR, name)
        if not os.path.isfile(src_path):
            continue  # skips the card/ and lqip/ subfolders themselves, etc.
        if not name.lower().endswith(VALID_EXT):
            continue

        out_path = os.path.join(OUT_DIR, name)

        # Skip if an up-to-date card image already exists
        if os.path.exists(out_path) and os.path.getmtime(out_path) >= os.path.getmtime(src_path):
            skipped += 1
            continue

        try:
            with Image.open(src_path) as img:
                img = img.convert("RGB")
                w, h = img.size
                if w <= TARGET_WIDTH:
                    thumb = img  # already small — don't upscale
                else:
                    new_h = max(1, round(h * (TARGET_WIDTH / w)))
                    thumb = img.resize((TARGET_WIDTH, new_h), Image.LANCZOS)
                thumb.save(out_path, "WEBP", quality=QUALITY, method=6)
            processed += 1
            print(f"  ✓ {name}")
        except Exception as e:
            failed += 1
            print(f"  ✗ {name} — {e}")

    print(f"\nDone. {processed} card image(s) generated, {skipped} already up to date, {failed} failed.")
    print(f"Card images are in: {OUT_DIR}/")


if __name__ == "__main__":
    main()
