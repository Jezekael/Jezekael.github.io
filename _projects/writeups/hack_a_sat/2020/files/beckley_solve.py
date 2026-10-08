#!/usr/bin/env python3
# pip install skyfield   (on Kali, not in the container)
# Fill in the values that YOUR nc session prints (they depend on SEED).
from skyfield.api import EarthSatellite, load, wgs84

TLE1 = "1 13337U 98067A   20087.38052801 -.00000452  00000-0  00000+0 0  9995"
TLE2 = "2 13337  51.6460  33.2488 0005270  61.9928  83.3154 15.48919755219337"
TIME = (2020, 3, 26, 21, 54, 29)         # UTC: Y, M, D, h, m, s
TARGET_LAT, TARGET_LON = 38.8894838, -77.0352791  # Washington Monument

ts = load.timescale(builtin=True)          # no download (the NASA FTP is dead)
sat = EarthSatellite(TLE1, TLE2, "SAT", ts)
t = ts.utc(*TIME)

target = wgs84.latlon(TARGET_LAT, TARGET_LON)
alt, az, dist = (sat - target).at(t).altaz()

heading = (az.degrees + 180) % 360   # Google Earth heading points FROM camera TO target
tilt = 90 - alt.degrees              # tilt is measured from zenith, altitude from horizon
rng = dist.m

sub = wgs84.subpoint(sat.at(t))
print(f"Satellite subpoint: lat {sub.latitude.degrees:.6f}, lon {sub.longitude.degrees:.6f}")
print(f"alt {alt.degrees:.6f}  az {az.degrees:.6f}  range {rng:.0f} m")
print(f"heading {heading:.9f}  tilt {tilt:.9f}")
print()
print(f"CAMERA={TARGET_LON},{TARGET_LAT},{rng:.0f},{tilt:.9f},{heading:.9f}")
