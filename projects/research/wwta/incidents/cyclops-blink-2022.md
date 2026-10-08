---
title: "Cyclops Blink malware campaign on SOHO and edge devices"
date: 2022-02-23
group: sandworm
region: "Global"
target: "WatchGuard and ASUS network devices, especially exposed edge infrastructure"
attribution: "NCSC-UK, CISA, NSA and the FBI publicly attributed Cyclops Blink to Sandworm, previously attributed to the Russian GRU."
description: "Western agencies disclosed a modular botnet framework used by Sandworm as a successor to VPNFilter."
coordinates: { lat: 51.5072, lng: -0.1276 }
techniques:
  - "Edge device compromise"
  - "Botnet construction"
  - "Modular malware framework"
  - "Persistence on network appliances"
effects:
  - "Compromised network edge devices"
  - "Potential covert infrastructure for later operations"
  - "Need for mass remediation by vendors and operators"
tags: [botnet, edge-devices, cyclops-blink, sandworm, routers]
timeline:
  - date: 2022-02-23
    title: "Joint advisory released"
    description: "UK and U.S. agencies publicly disclose Cyclops Blink and identify it as Sandworm activity."
  - date: 2022-03
    title: "Vendor remediation expands"
    description: "WatchGuard and other vendors publish guidance and tooling for detection and cleanup."
sources:
  - label: "Joint advisory: New Sandworm malware Cyclops Blink replaces VPNFilter"
    url: https://media.defense.gov/2022/Feb/23/2002943421/-1/-1/0/CSA_NEW_SANDWORM_MALWARE_CYCLOPS_BLINK_REPLACES_VPNFILTER_20220223.PDF
  - label: "NCSC notice on Cyclops Blink"
    url: https://www.ncsc.gov.uk/news/joint-advisory-shows-new-sandworm-malware-cyclops-blink-replaces-vpnfilter
---
Cyclops Blink was described by UK and U.S. authorities as a more advanced replacement for the
earlier VPNFilter framework. The malware targeted small office and edge networking devices to create
resilient command-and-control infrastructure and potentially support downstream operations.
