---
title: "SolarWinds Orion supply-chain compromise"
date: 2020-12-13
group: apt29
region: "North America"
target: "Government and enterprise networks running SolarWinds Orion"
attribution: "U.S. government statements and joint advisories linked the campaign to the Russian Foreign Intelligence Service (SVR), commonly tracked as APT29 / Cozy Bear."
description: "Backdoored Orion updates enabled selective follow-on espionage against U.S. federal agencies and other organizations."
coordinates: { lat: 38.9072, lng: -77.0369 }
techniques:
  - "Software supply-chain compromise"
  - "Trusted software update abuse"
  - "Stealthy post-compromise exploitation"
  - "Credential and identity access"
effects:
  - "Long dwell time in victim networks"
  - "Exposure of government and enterprise communications"
  - "Large-scale remediation and incident response costs"
tags: [supply-chain, espionage, solarwinds, orion, svr]
timeline:
  - date: 2020-12-13
    title: "Compromise disclosed"
    description: "SolarWinds disclosed that malicious code had been inserted into Orion software builds and distributed to customers."
  - date: 2020-12-14
    title: "Emergency response begins"
    description: "CISA ordered affected U.S. federal civilian agencies to disconnect or power down vulnerable Orion products."
  - date: 2021-04-26
    title: "Joint advisory published"
    description: "FBI, CISA and NSA published a joint advisory linking the activity to Russian SVR cyber operations."
sources:
  - label: "CISA / FBI / NSA joint advisory on Russian SVR cyber operations"
    url: https://www.cisa.gov/news-events/alerts/2021/04/26/fbi-dhs-cisa-joint-advisory-russian-foreign-intelligence-service-cyber-operations
  - label: "Joint U.S. government statement on the SolarWinds compromise"
    url: https://www.cisa.gov/news-events/news/joint-statement-federal-bureau-investigation-fbi-cybersecurity-and-infrastructure-security-agency-0
---
The SolarWinds incident remains one of the most consequential public software supply-chain
compromises. Malicious code was inserted into signed Orion updates, giving the operators an initial
foothold in victim environments. Follow-on activity was then selectively pursued against higher-
value targets for intelligence collection rather than broad disruption.
