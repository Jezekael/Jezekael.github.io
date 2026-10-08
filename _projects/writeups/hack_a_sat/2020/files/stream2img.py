#!/usr/bin/env python3
"""
stream2img.py - render a 'centroids' frame (CSV text, one row per line)
as star.png.

    ./stream2img.py frame.txt
"""
import sys

import numpy as np
from PIL import Image

rows = [line.split(",") for line in open(sys.argv[1]) if line.strip()]
img = np.array(rows, dtype=float)

# Background is ~0-10 and faint stars ~20, so stretch to 0-255 to see them.
img = (img - img.min()) * 255 / (img.max() - img.min())

h, w = img.shape
Image.fromarray(img.astype(np.uint8)).resize((w * 4, h * 4), Image.NEAREST).save("star.png")
print(f"[+] wrote star.png ({w}x{h})")
