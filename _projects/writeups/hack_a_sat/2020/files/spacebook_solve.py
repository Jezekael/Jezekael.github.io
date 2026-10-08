#!/usr/bin/env python3
# SpaceBook solver — identify stars by their (rotation-invariant) magnitude.
import socket, re

HOST, PORT = "localhost", 5000
CATALOG    = "test/test.txt"      # from the challenge tarball

# Catalog: line N (0-based) -> magnitude. The observed X,Y,Z are in a rotated
# frame, so only magnitude is a reliable key between catalog and observation.
catalog = []
with open(CATALOG) as f:
    for i, line in enumerate(f):
        p = line.split(",")
        if len(p) >= 4:
            catalog.append((float(p[3]), i))

def index_of(mag):                          # nearest magnitude -> its index
    return min(catalog, key=lambda t: abs(t[0] - mag))[1]

star = re.compile(r"(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)")
s = socket.create_connection((HOST, PORT)); s.settimeout(8)
buf = ""

def pump(markers):
    global buf
    while not any(m in buf for m in markers):
        try: d = s.recv(4096).decode(errors="ignore")
        except socket.timeout: return False
        if not d: return False
        buf += d
    return True

for _ in range(8):
    if not pump(["Index Guesses", "flag{", "Ticket please"]): break
    if "flag{" in buf: break
    batch = buf.split("Index Guesses", 1)[0]
    stars = [tuple(map(float, m)) for m in star.findall(batch)]
    stars.sort(key=lambda t: t[3], reverse=True)          # brightest first
    guess = ",".join(str(index_of(t[3])) for t in stars[:5])
    print(">>", guess)
    s.sendall((guess + "\n").encode())
    buf = buf.split("Index Guesses", 1)[1]

pump(["flag{"]); print(buf[-400:])
