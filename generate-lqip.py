#!/usr/bin/env python3
"""
generate-lqip.py
-----------------
Run this ONCE (and again any time you add new poster images) from the
folder that contains your site's `images/` directory.

It creates a matching `images/lqip/<same-filename>` for every image in
`images/`, resized down to a tiny width and saved at low quality. These
are the placeholder files the homepage product cards load first (see
the `pc-lqip` / lqipSrc() code in index.html) — they're a few KB each,
so the card paints almost instantly, then index.html quietly swaps in
the real full-resolution image once it's ready.

Usage:
    pip install Pillow
    python3 generate-lqip.py

Safe to re-run: it skips any file that already has an up-to-date
thumbnail, so subsequent runs only process newly added images.
"""

import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with:  pip install Pillow")
    sys.exit(1)

SRC_DIR = "images"          # folder with your full-resolution poster images
OUT_DIR = os.path.join(SRC_DIR, "lqip")
THUMB_WIDTH = 32             # tiny — this is only ever shown blurred, in a small card
QUALITY = 35                 # low quality is fine; it's swapped out within a moment

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
            continue  # skips the lqip/ subfolder itself, etc.
        if not name.lower().endswith(VALID_EXT):
            continue

        out_path = os.path.join(OUT_DIR, name)

        # Skip if an up-to-date thumbnail already exists
        if os.path.exists(out_path) and os.path.getmtime(out_path) >= os.path.getmtime(src_path):
            skipped += 1
            continue

        try:
            with Image.open(src_path) as img:
                img = img.convert("RGB") if img.mode in ("P", "RGBA") else img.convert("RGB")
                w, h = img.size
                new_w = THUMB_WIDTH
                new_h = max(1, round(h * (new_w / w)))
                thumb = img.resize((new_w, new_h), Image.LANCZOS)
                thumb.save(out_path, "WEBP", quality=QUALITY, method=6)
            processed += 1
            print(f"  ✓ {name}")
        except Exception as e:
            failed += 1
            print(f"  ✗ {name} — {e}")

    print(f"\nDone. {processed} thumbnail(s) generated, {skipped} already up to date, {failed} failed.")
    print(f"Placeholders are in: {OUT_DIR}/")

if __name__ == "__main__":
    main()
