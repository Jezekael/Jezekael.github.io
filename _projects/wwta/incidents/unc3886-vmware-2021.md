---
title: "UNC3886 exploitation of VMware vCenter / ESXi environments"
date: 2021-10-01
group: unc3886
region: "Global"
target: "VMware vCenter, ESXi hosts, and high-value virtualization environments"
attribution: "Mandiant and VMware Product Security described UNC3886 as a highly advanced China-nexus espionage group exploiting VMware vulnerabilities since late 2021."
description: "UNC3886 exploited VMware infrastructure to access virtualization layers, deploy backdoors and move toward high-value systems."
coordinates: { lat: 1.3521, lng: 103.8198 }
techniques:
  - "Zero-day or n-day exploitation of virtualization infrastructure"
  - "ESXi backdoor deployment"
  - "Guest-to-host and infrastructure pivoting"
  - "Stealth-focused post-compromise tradecraft"
effects:
  - "Compromise of high-trust management infrastructure"
  - "Broader access to virtualized workloads"
  - "High remediation burden in complex enterprise environments"
tags: [vmware, esxi, vcenter, china, zero-day]
timeline:
  - date: 2021-late
    title: "Earliest observed exploitation window"
    description: "Mandiant reports exploitation of CVE-2023-34048 as far back as late 2021."
  - date: 2023-06-13
    title: "Related VMware zero-day reporting"
    description: "Mandiant publishes separate reporting on UNC3886 exploitation of VMware ESXi zero-day CVE-2023-20867."
  - date: 2024-01-19
    title: "Long-term vCenter exploitation disclosed"
    description: "Mandiant and VMware Product Security publish details on UNC3886 exploitation of VMware vCenter since late 2021."
  - date: 2024-06-18
    title: "Follow-on espionage tradecraft detailed"
    description: "Mandiant publishes additional detail on UNC3886 intrusion paths and post-compromise actions."
sources:
  - label: "Mandiant / VMware Product Security: Chinese espionage group UNC3886 exploiting vCenter since 2021"
    url: https://cloud.google.com/blog/topics/threat-intelligence/chinese-vmware-exploitation-since-2021/
  - label: "Mandiant: VMware ESXi zero-day used by UNC3886"
    url: https://cloud.google.com/blog/topics/threat-intelligence/vmware-esxi-zero-day-bypass/
  - label: "Mandiant: Cloaked and Covert – UNC3886 espionage operations"
    url: https://cloud.google.com/blog/topics/threat-intelligence/uncovering-unc3886-espionage-operations
---
UNC3886 is notable for targeting the virtualization layer itself rather than stopping at guest
operating systems. Mandiant reported exploitation of CVE-2023-34048 as far back as late 2021 and
tied the actor to custom ESXi backdoors, deep post-compromise tradecraft and strong operational
security inside hard targets.
