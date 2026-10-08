---
title: Satellite eavesdropper station
short_title: Satellite station
date: 2026-01-15
category: RF / SDR
description: "Building an SDR ground station for satellite downlinks, anchored to the 2025 \"Don't Look Up\" GEO cleartext research."
tags: [sdr, rf, satellite, geo]
info: { Status: In progress }
link_text: Read project →
---
<!-- TODO(jezekael): replace placeholder sections with your real build. -->

> This post is a working template. Hardware, configuration and captured results are my own and will be
> filled in as the station comes together.

## 1. Goal

<!-- TODO(jezekael): state your actual goal. -->Decide what the station is meant to receive: weather
imagery (LRPT), L-band downlinks, or a passive GEO IP study. **TODO:** state the concrete objective
for this build.

## 2. Background: why now

The strongest contemporary anchor is the 2025 study **"Don't Look Up: There Are Sensitive Internal
Links in the Clear on GEO Satellites"** (UC San Diego + University of Maryland), presented at **ACM
CCS 2025** and awarded a Distinguished Paper. Using a roughly $800 consumer satellite dish, a motor
and a consumer TV-tuner card, scanning from a rooftop over about three years, the researchers
observed 39 GEO satellites across 25 distinct longitudes with 411 transponders, and found that
**about 50% of GEO links contained cleartext IP traffic**: cellular backhaul (calls, SMS, IMSI),
in-flight Wi-Fi, VoIP, corporate and retail internal networks, critical-infrastructure SCADA, and
some military and government traffic. The authors stress the work was **fully passive** and legally
reviewed.

The hobbyist landscape also shifted in 2025: NOAA decommissioned its last APT weather birds, NOAA-18
(June 6, 2025), NOAA-19 (August 13, 2025) and NOAA-15 (August 19, 2025), ending the classic 137 MHz
NOAA APT reception path and pushing enthusiasts toward Meteor-M2 LRPT, GOES, and the GEO work above.

## 3. Hardware

- **Antenna:** <!-- TODO -->TODO: e.g. a QFH / turnstile for 137 MHz LRPT, or an offset dish + LNB
  for Ku-band GEO.
- **SDR:** TODO: RTL-SDR, Airspy, etc.
- **Front-end:** TODO: LNA and filters.
- **Positioning:** TODO: rotator / motor and mount.

## 4. Software stack

Candidates: **SatDump**, **GNU Radio**, **gr-satellites**, and for the GEO IP-study path the
open-source **"dontlookup"** DVB-S2(X) IP packet extractor. **TODO:** record which you used and the
configuration.

## 5. Legal & ethical considerations

Reception rules vary by country, and passively receiving a signal is treated very differently from
decoding or using private traffic. Follow responsible-disclosure norms if you ever observe
unencrypted sensitive data, and **do not act on intercepted content**. The "Don't Look Up" authors
foreground exactly this framing and reference NSA VSAT guidance. **TODO:** document your own
jurisdiction's rules before transmitting or decoding anything.

## 6. Results

<!-- TODO(jezekael): captures, decoded images/telemetry, screenshots, lessons learned. -->TODO:
captures, decoded imagery or telemetry, screenshots, and lessons learned.

## 7. References

- [UC San Diego: SATCOM Security project (paper, code, FAQ)](https://satcom.sysnet.ucsd.edu/)
- [Aaron Schulman, project co-lead](https://cseweb.ucsd.edu//~schulman/)
- [SatDump](https://www.satdump.org/) · [gr-satellites](https://gr-satellites.readthedocs.io/)
{: .source-list}
