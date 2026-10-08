#!/usr/bin/env python3
# Usage: python3 solve.py                (local, spawns challenge/run.py)
#        python3 solve.py HOST PORT [TICKET]
import math, os, re, socket, subprocess, sys

RATE = math.radians(1.0)  # pitch offset ramp, rad per second of sim time
TS = 0.05                 # sim step (Ts in challenge.m)

if len(sys.argv) >= 3:
    s = socket.create_connection((sys.argv[1], int(sys.argv[2])))
    rx = tx = s.makefile("rw")
    if len(sys.argv) > 3:
        print(rx.readline().strip())
        tx.write(sys.argv[3] + "\n"); tx.flush()
else:
    here = os.path.dirname(os.path.abspath(__file__))
    p = subprocess.Popen(["python3", "../challenge/run.py"], cwd=os.path.join(here, "src"),
                         env={**os.environ, "FLAG": os.getenv("FLAG", "flag{local_test}")},
                         stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
    rx, tx = p.stdout, p.stdin

t = 0.0
for line in rx:
    nums = re.findall(r"[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?", line)
    if len(nums) != 4:  # flag, error message, etc.
        print(line.strip())
        if "flag{" in line.lower() or "error" in line.lower():
            break
        continue
    w, x, y, z = map(float, nums)
    # Left-multiply true attitude by a pitch rotation of angle a about -y: (cos(a/2), 0, -sin(a/2), 0)
    a = min(math.pi, RATE * t)
    c, s_ = math.cos(a / 2), -math.sin(a / 2)
    q = (c*w - s_*y, c*x + s_*z, c*y + s_*w, c*z - s_*x)
    tx.write(",".join(f"{v:.8f}" for v in q) + "\n"); tx.flush()
    t += TS
