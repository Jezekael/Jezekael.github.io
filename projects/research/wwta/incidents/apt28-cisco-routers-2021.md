---
title: "APT28 exploitation of Cisco routers"
date: 2021-01-01
group: apt28
region: "Europe"
target: "Poorly maintained Cisco routers in Europe, U.S. institutions, and Ukrainian networks"
attribution: "The NCSC, NSA, FBI and CISA assessed APT28 as the Russian GRU’s Unit 26165 and described exploitation activity observed in 2021."
description: "APT28 abused weak SNMP configuration and a known Cisco vulnerability to collect network information and deploy Jaguar Tooth malware."
coordinates: { lat: 50.0755, lng: 14.4378 }
techniques:
  - "SNMP abuse"
  - "Exploitation of CVE-2017-6742"
  - "Router reconnaissance"
  - "Malware deployment on network infrastructure"
effects:
  - "Exposure of router configuration and network data"
  - "Persistence on selected devices"
  - "Potential downstream network compromise"
tags: [apt28, cisco, routers, snmp, jaguar-tooth]
timeline:
  - date: 2021
    title: "Observed exploitation activity"
    description: "APT28 activity against Cisco routers is observed across Europe, U.S. institutions and Ukrainian victims."
  - date: 2023-04-18
    title: "Joint advisory published"
    description: "UK and U.S. agencies publish technical details and mitigations for the activity."
sources:
  - label: "CISA advisory: APT28 exploits known vulnerability to carry out reconnaissance and deploy malware on Cisco routers"
    url: https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-108
  - label: "NCSC advisory on APT28 exploitation of Cisco routers"
    url: https://www.ncsc.gov.uk/news/apt28-exploits-known-vulnerability-to-carry-out-reconnaissance-and-deploy-malware-on-cisco-routers
---
The joint advisory on APT28 router exploitation shows a practical example of Russian military
intelligence using weak edge-device hygiene as an entry point. The activity included abuse of
default or weak SNMP community strings, exploitation of CVE-2017-6742 on unpatched routers,
reconnaissance and, on some targets, Jaguar Tooth malware deployment.
