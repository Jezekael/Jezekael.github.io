#!/usr/bin/env python3
"""
centroids_solve.py - solve Hack-A-Sat 'centroids' over the network.

    ./centroids_solve.py --nc HOST PORT

The server sends each frame as CSV text (one row per line), then asks for the
star centroids as "x,y" lines, where x = row (line index) and y = column.
"""
import argparse
import socket

import numpy as np
from scipy import ndimage


def find_stars(img):
    # Background threshold: median + 5 * robust std (from the MAD).
    median = np.median(img)
    mad = np.median(np.abs(img - median))
    thr = median + 5 * 1.4826 * mad

    # Group touching bright pixels into stars, then take the
    # background-subtracted, intensity-weighted centroid of each one.
    labels, n = ndimage.label(img > thr, structure=np.ones((3, 3)))
    ids = range(1, n + 1)
    weights = img - median
    cents = ndimage.center_of_mass(weights, labels, ids)
    flux = ndimage.sum(weights, labels, ids)

    # Brightest first; the server only grades the first 10 answers.
    order = np.argsort(flux)[::-1][:10]
    return [cents[i] for i in order]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--nc", nargs=2, metavar=("HOST", "PORT"), required=True)
    host, port = ap.parse_args().nc

    sock = socket.create_connection((host, int(port)))
    f = sock.makefile("rw")

    rows = []
    for line in f:
        line = line.strip()
        if line and set(line) <= set("0123456789,"):
            rows.append([int(v) for v in line.split(",")])
        elif "Finish your list" in line:
            stars = find_stars(np.array(rows, dtype=float))
            for x, y in stars:
                f.write(f"{x:.4f},{y:.4f}\n")
            f.write("\n")
            f.flush()
            print(f"[+] sent {len(stars)} centroids")
            rows = []
        elif line:
            print(line)


if __name__ == "__main__":
    main()
