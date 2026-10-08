---
title: "3CX desktop application supply-chain compromise"
date: 2023-03-29
group: lazarus
region: "Global"
target: "3CX customers using trojanized desktop application builds on Windows and macOS"
attribution: "3CX published Mandiant’s interim findings stating with high confidence that UNC4736 had a North Korean nexus; the broader activity is commonly linked to the Lazarus ecosystem."
description: "Malicious code inserted into legitimate 3CX software turned a trusted desktop client into a delivery path for follow-on malware."
coordinates: { lat: 35.1856, lng: 33.3823 }
techniques:
  - "Software supply-chain compromise"
  - "DLL sideloading"
  - "Multi-stage malware delivery"
  - "Command-and-control via staged infrastructure"
effects:
  - "Exposure of downstream enterprise customers"
  - "Need to uninstall and replace affected software"
  - "Renewed scrutiny of vendor build security"
tags: [3cx, supply-chain, north-korea, software-update, unc4736]
timeline:
  - date: 2023-03-29
    title: "Security vendors flag malicious 3CX app behavior"
    description: "Public reporting begins to identify the 3CX desktop application as the source of malicious activity."
  - date: 2023-04-11
    title: "3CX publishes Mandiant interim assessment"
    description: "3CX states that Mandiant attributes the activity to UNC4736 with high confidence in a North Korean nexus."
  - date: 2023-04-20
    title: "Broader supply-chain chain disclosed"
    description: "Mandiant reports that the 3CX compromise itself began with a previous software supply-chain compromise."
sources:
  - label: "3CX security update citing Mandiant interim findings"
    url: https://www.3cx.com/blog/news/mandiant-initial-results/
  - label: "Mandiant: 3CX software supply-chain compromise"
    url: https://cloud.google.com/blog/topics/threat-intelligence/3cx-software-supply-chain-compromise
---
The 3CX case is a strong modern example of a state-linked software supply-chain intrusion affecting
downstream customers through a trusted vendor update. Mandiant’s investigation, published by 3CX,
assessed with high confidence that the activity cluster UNC4736 had a North Korean nexus. Later
reporting tied the intrusion to a prior compromise in the supplier chain.
