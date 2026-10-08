---
title: "UNC4841 exploitation of Barracuda ESG appliances"
date: 2023-06-15
group: unc4841
region: "Global"
target: "Organizations running Barracuda Email Security Gateway appliances"
attribution: "Barracuda and Mandiant publicly tied the campaign to UNC4841; Mandiant assessed with high confidence that the operation supported the People's Republic of China."
description: "A China-nexus espionage actor exploited a Barracuda ESG zero-day and adapted quickly to remediation to preserve access."
coordinates: { lat: 37.7749, lng: -122.4194 }
techniques:
  - "Zero-day exploitation"
  - "Malware persistence on appliances"
  - "Selective exfiltration"
  - "Lateral movement from security appliances"
effects:
  - "Compromise of email security infrastructure"
  - "Persistence despite patching efforts"
  - "Global espionage access across public and private sectors"
tags: [barracuda, zero-day, china, unc4841, email-security]
timeline:
  - date: 2022-10-10
    title: "Earliest known exploitation activity"
    description: "Mandiant says UNC4841 began sending malicious emails designed to exploit CVE-2023-2868 as early as October 2022."
  - date: 2023-05-23
    title: "Barracuda discloses exploitation"
    description: "Barracuda announces that a zero-day in ESG appliances was being exploited in the wild."
  - date: 2023-06-15
    title: "Mandiant publishes attribution and campaign details"
    description: "Mandiant publishes detailed analysis identifying UNC4841 and assessing high-confidence support to the PRC."
sources:
  - label: "Mandiant analysis of Barracuda ESG exploitation"
    url: https://cloud.google.com/blog/topics/threat-intelligence/barracuda-esg-exploited-globally/
  - label: "Barracuda vulnerability information page"
    url: https://trust.barracuda.com/security/information/esg-vulnerability
---
The Barracuda ESG campaign is a strong example of espionage tradecraft focused on security
infrastructure itself. According to Barracuda and Mandiant, UNC4841 exploited CVE-2023-2868 as early
as October 2022, used purpose-built malware to persist on appliances, and in some cases used the
appliance foothold for data theft and lateral movement. The campaign affected organizations across
multiple regions and sectors, including many government entities.
