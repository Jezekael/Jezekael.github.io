window.CYBER_FOOTPRINTS_DATA = {
  "incidents": [
    {
      "id": "solarwinds-2020",
      "title": "SolarWinds Orion supply-chain compromise",
      "group": "apt29",
      "group_name": "APT29",
      "date": "2020-12-13",
      "region": "North America",
      "target": "Government and enterprise networks running SolarWinds Orion",
      "attribution": "U.S. government statements and joint advisories linked the campaign to the Russian Foreign Intelligence Service (SVR), commonly tracked as APT29 / Cozy Bear.",
      "summary": "Backdoored Orion updates enabled selective follow-on espionage against U.S. federal agencies and other organizations.",
      "description": "The SolarWinds incident remains one of the most consequential public software supply-chain compromises. Malicious code was inserted into signed Orion updates, giving the operators an initial foothold in victim environments. Follow-on activity was then selectively pursued against higher-value targets for intelligence collection rather than broad disruption.",
      "coordinates": {
        "lat": 38.9072,
        "lng": -77.0369
      },
      "techniques": [
        "Software supply-chain compromise",
        "Trusted software update abuse",
        "Stealthy post-compromise exploitation",
        "Credential and identity access"
      ],
      "effects": [
        "Long dwell time in victim networks",
        "Exposure of government and enterprise communications",
        "Large-scale remediation and incident response costs"
      ],
      "tags": [
        "supply-chain",
        "espionage",
        "solarwinds",
        "orion",
        "svr"
      ],
      "timeline": [
        {
          "date": "2020-12-13",
          "title": "Compromise disclosed",
          "description": "SolarWinds disclosed that malicious code had been inserted into Orion software builds and distributed to customers."
        },
        {
          "date": "2020-12-14",
          "title": "Emergency response begins",
          "description": "CISA ordered affected U.S. federal civilian agencies to disconnect or power down vulnerable Orion products."
        },
        {
          "date": "2021-04-26",
          "title": "Joint advisory published",
          "description": "FBI, CISA and NSA published a joint advisory linking the activity to Russian SVR cyber operations."
        }
      ],
      "sources": [
        {
          "label": "CISA / FBI / NSA joint advisory on Russian SVR cyber operations",
          "url": "https://www.cisa.gov/news-events/alerts/2021/04/26/fbi-dhs-cisa-joint-advisory-russian-foreign-intelligence-service-cyber-operations"
        },
        {
          "label": "Joint U.S. government statement on the SolarWinds compromise",
          "url": "https://www.cisa.gov/news-events/news/joint-statement-federal-bureau-investigation-fbi-cybersecurity-and-infrastructure-security-agency-0"
        }
      ]
    },
    {
      "id": "notpetya-2017",
      "title": "NotPetya destructive malware campaign",
      "group": "sandworm",
      "group_name": "Sandworm",
      "date": "2017-06-27",
      "region": "Europe",
      "target": "Ukrainian organizations first, with global spillover across multiple sectors",
      "attribution": "The U.S. and UK governments publicly attributed NotPetya to the Russian military; later DOJ charges tied the malware family to GRU officers associated with Sandworm operations.",
      "summary": "A destructive campaign masquerading as ransomware spread from Ukraine into multinational networks and caused major operational losses worldwide.",
      "description": "NotPetya began through the compromise of Ukrainian software supply-chain infrastructure and quickly spread into global corporate environments. Although it presented as ransomware, public attribution and later legal action treated it as a destructive operation aligned with Russian military objectives against Ukraine, with indiscriminate worldwide impact.",
      "coordinates": {
        "lat": 50.4501,
        "lng": 30.5234
      },
      "techniques": [
        "Supply-chain compromise",
        "Wiper / pseudo-ransomware deployment",
        "Credential theft and lateral movement",
        "Operational disruption"
      ],
      "effects": [
        "Business interruption across multiple countries",
        "Data destruction and system rebuilds",
        "Massive financial losses and collateral impact"
      ],
      "tags": [
        "wiper",
        "notpetya",
        "ukraine",
        "supply-chain",
        "gru"
      ],
      "timeline": [
        {
          "date": "2017-06-27",
          "title": "Malware outbreak begins",
          "description": "The destructive malware begins spreading from initially affected organizations in Ukraine."
        },
        {
          "date": "2018-02-15",
          "title": "Public state attribution",
          "description": "The White House publicly states that the attack was part of the Kremlin’s effort to destabilize Ukraine."
        },
        {
          "date": "2020-10-19",
          "title": "DOJ indictment references NotPetya",
          "description": "The U.S. Department of Justice charges GRU officers in connection with destructive malware operations including NotPetya."
        }
      ],
      "sources": [
        {
          "label": "White House statement on attribution of NotPetya",
          "url": "https://trumpwhitehouse.archives.gov/briefings-statements/statement-press-secretary-25/"
        },
        {
          "label": "CISA Petya / NotPetya alert updated with U.S. attribution",
          "url": "https://www.cisa.gov/news-events/alerts/2017/07/01/petya-ransomware"
        },
        {
          "label": "DOJ indictment of Russian GRU officers for destructive malware operations",
          "url": "https://www.justice.gov/archives/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and"
        }
      ]
    },
    {
      "id": "viasat-kasat-2022",
      "title": "KA-SAT satellite disruption at the start of the invasion of Ukraine",
      "group": "sandworm",
      "group_name": "Sandworm",
      "date": "2022-02-24",
      "region": "Europe",
      "target": "Viasat KA-SAT ground segment and downstream satellite broadband users",
      "attribution": "The EU and partner governments publicly attributed the operation to the Russian Federation; public case material broadly links it to GRU-linked tradecraft associated with Sandworm activity.",
      "summary": "A cyberattack on KA-SAT caused wide communication outages in Ukraine and spillover disruption in other European countries.",
      "description": "The KA-SAT incident took place around one hour before Russia’s full-scale invasion of Ukraine. Public government statements describe broad communication outages affecting public authorities, businesses and private users, not just targets in Ukraine. The event is now treated as one of the clearest examples of strategic cyber disruption synchronized with kinetic military operations.",
      "coordinates": {
        "lat": 50.8503,
        "lng": 4.3517
      },
      "techniques": [
        "Remote management abuse",
        "Destructive modem disruption",
        "Coordinated timing with military operations",
        "Service denial"
      ],
      "effects": [
        "Loss of connectivity for civilian and institutional users",
        "Cross-border spillover into EU member states",
        "Operational disruption for dependent organizations"
      ],
      "tags": [
        "satcom",
        "disruption",
        "ukraine",
        "europe",
        "spillover"
      ],
      "timeline": [
        {
          "date": "2022-02-24",
          "title": "Attack coincides with invasion",
          "description": "The cyberattack takes place roughly one hour before Russia’s full-scale invasion of Ukraine."
        },
        {
          "date": "2022-03-30",
          "title": "Viasat publishes network overview",
          "description": "Viasat describes the incident and the effect on customer modems and satellite service continuity."
        },
        {
          "date": "2022-05-10",
          "title": "EU public attribution",
          "description": "The European Union publicly attributes the malicious cyber activity targeting the KA-SAT network to the Russian Federation."
        }
      ],
      "sources": [
        {
          "label": "EU declaration on Russian cyber operations against Ukraine",
          "url": "https://www.consilium.europa.eu/en/press/press-releases/2022/05/10/russian-cyber-operations-against-ukraine-declaration-by-the-high-representative-on-behalf-of-the-european-union/"
        },
        {
          "label": "EU declaration recalling attribution of the KA-SAT operation",
          "url": "https://www.consilium.europa.eu/en/press/press-releases/2022/07/19/declaration-by-the-high-representative-on-behalf-of-the-european-union-on-malicious-cyber-activities-conducted-by-hackers-and-hacker-groups-in-the-context-of-russia-s-aggression-against-ukraine/"
        },
        {
          "label": "CISA advisory on Russian state-sponsored cyber threats",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-110a"
        }
      ]
    },
    {
      "id": "cyclops-blink-2022",
      "title": "Cyclops Blink malware campaign on SOHO and edge devices",
      "group": "sandworm",
      "group_name": "Sandworm",
      "date": "2022-02-23",
      "region": "Global",
      "target": "WatchGuard and ASUS network devices, especially exposed edge infrastructure",
      "attribution": "NCSC-UK, CISA, NSA and the FBI publicly attributed Cyclops Blink to Sandworm, previously attributed to the Russian GRU.",
      "summary": "Western agencies disclosed a modular botnet framework used by Sandworm as a successor to VPNFilter.",
      "description": "Cyclops Blink was described by UK and U.S. authorities as a more advanced replacement for the earlier VPNFilter framework. The malware targeted small office and edge networking devices to create resilient command-and-control infrastructure and potentially support downstream operations.",
      "coordinates": {
        "lat": 51.5072,
        "lng": -0.1276
      },
      "techniques": [
        "Edge device compromise",
        "Botnet construction",
        "Modular malware framework",
        "Persistence on network appliances"
      ],
      "effects": [
        "Compromised network edge devices",
        "Potential covert infrastructure for later operations",
        "Need for mass remediation by vendors and operators"
      ],
      "tags": [
        "botnet",
        "edge-devices",
        "cyclops-blink",
        "sandworm",
        "routers"
      ],
      "timeline": [
        {
          "date": "2022-02-23",
          "title": "Joint advisory released",
          "description": "UK and U.S. agencies publicly disclose Cyclops Blink and identify it as Sandworm activity."
        },
        {
          "date": "2022-03",
          "title": "Vendor remediation expands",
          "description": "WatchGuard and other vendors publish guidance and tooling for detection and cleanup."
        }
      ],
      "sources": [
        {
          "label": "Joint advisory: New Sandworm malware Cyclops Blink replaces VPNFilter",
          "url": "https://media.defense.gov/2022/Feb/23/2002943421/-1/-1/0/CSA_NEW_SANDWORM_MALWARE_CYCLOPS_BLINK_REPLACES_VPNFILTER_20220223.PDF"
        },
        {
          "label": "NCSC notice on Cyclops Blink",
          "url": "https://www.ncsc.gov.uk/news/joint-advisory-shows-new-sandworm-malware-cyclops-blink-replaces-vpnfilter"
        }
      ]
    },
    {
      "id": "apt28-cisco-routers-2021",
      "title": "APT28 exploitation of Cisco routers",
      "group": "apt28",
      "group_name": "APT28",
      "date": "2021-01-01",
      "region": "Europe",
      "target": "Poorly maintained Cisco routers in Europe, U.S. institutions, and Ukrainian networks",
      "attribution": "The NCSC, NSA, FBI and CISA assessed APT28 as the Russian GRU’s Unit 26165 and described exploitation activity observed in 2021.",
      "summary": "APT28 abused weak SNMP configuration and a known Cisco vulnerability to collect network information and deploy Jaguar Tooth malware.",
      "description": "The joint advisory on APT28 router exploitation shows a practical example of Russian military intelligence using weak edge-device hygiene as an entry point. The activity included abuse of default or weak SNMP community strings, exploitation of CVE-2017-6742 on unpatched routers, reconnaissance and, on some targets, Jaguar Tooth malware deployment.",
      "coordinates": {
        "lat": 50.0755,
        "lng": 14.4378
      },
      "techniques": [
        "SNMP abuse",
        "Exploitation of CVE-2017-6742",
        "Router reconnaissance",
        "Malware deployment on network infrastructure"
      ],
      "effects": [
        "Exposure of router configuration and network data",
        "Persistence on selected devices",
        "Potential downstream network compromise"
      ],
      "tags": [
        "apt28",
        "cisco",
        "routers",
        "snmp",
        "jaguar-tooth"
      ],
      "timeline": [
        {
          "date": "2021",
          "title": "Observed exploitation activity",
          "description": "APT28 activity against Cisco routers is observed across Europe, U.S. institutions and Ukrainian victims."
        },
        {
          "date": "2023-04-18",
          "title": "Joint advisory published",
          "description": "UK and U.S. agencies publish technical details and mitigations for the activity."
        }
      ],
      "sources": [
        {
          "label": "CISA advisory: APT28 exploits known vulnerability to carry out reconnaissance and deploy malware on Cisco routers",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-108"
        },
        {
          "label": "NCSC advisory on APT28 exploitation of Cisco routers",
          "url": "https://www.ncsc.gov.uk/news/apt28-exploits-known-vulnerability-to-carry-out-reconnaissance-and-deploy-malware-on-cisco-routers"
        }
      ]
    },
    {
      "id": "storm-0558-2023",
      "title": "Storm-0558 email intrusion against Microsoft cloud customers",
      "group": "storm-0558",
      "group_name": "Storm-0558",
      "date": "2023-05-15",
      "region": "Global",
      "target": "Exchange Online and Outlook.com email accounts linked to government and related users",
      "attribution": "Microsoft publicly described Storm-0558 as a China-based threat actor and published technical findings on the token-forgery abuse used in the campaign.",
      "summary": "A China-based espionage actor forged authentication tokens to access customer email accounts, including government-linked targets.",
      "description": "Microsoft reported that Storm-0558 gained access to customer email by using a stolen consumer signing key together with a token validation issue. The campaign primarily targeted government agencies in Western Europe and affected roughly 25 organizations in the public cloud, along with related consumer accounts of associated individuals.",
      "coordinates": {
        "lat": 47.6062,
        "lng": -122.3321
      },
      "techniques": [
        "Forged authentication tokens",
        "Cloud email access",
        "Credential and token abuse",
        "Targeted espionage collection"
      ],
      "effects": [
        "Unauthorized access to mailbox content",
        "Exposure of diplomatic and government communications",
        "Microsoft-wide mitigation and investigation activity"
      ],
      "tags": [
        "cloud",
        "email",
        "token-forgery",
        "china",
        "microsoft"
      ],
      "timeline": [
        {
          "date": "2023-05-15",
          "title": "Activity window begins",
          "description": "Microsoft later states that the actor’s observed access began on May 15, 2023."
        },
        {
          "date": "2023-06-16",
          "title": "Customer-reported anomalies trigger investigation",
          "description": "Microsoft begins a formal investigation after reported anomalous mail activity."
        },
        {
          "date": "2023-07-11",
          "title": "Microsoft publishes disclosure",
          "description": "Microsoft publicly details the campaign and states that it has blocked further access using the abused signing key."
        },
        {
          "date": "2023-09-06",
          "title": "Technical investigation update",
          "description": "Microsoft publishes additional findings on the key acquisition and broader technical investigation."
        }
      ],
      "sources": [
        {
          "label": "Microsoft MSRC: Storm-0558 targeting of customer email",
          "url": "https://www.microsoft.com/en-us/msrc/blog/2023/07/microsoft-mitigates-china-based-threat-actor-storm-0558-targeting-of-customer-email"
        },
        {
          "label": "Microsoft Security analysis of Storm-0558 techniques",
          "url": "https://www.microsoft.com/en-us/security/blog/2023/07/14/analysis-of-storm-0558-techniques-for-unauthorized-email-access/"
        },
        {
          "label": "Microsoft investigation update on Storm-0558 key acquisition",
          "url": "https://www.microsoft.com/en-us/msrc/blog/2023/09/results-of-major-technical-investigations-for-storm-0558-key-acquisition/"
        }
      ]
    },
    {
      "id": "volt-typhoon-critical-infrastructure-2023",
      "title": "Volt Typhoon access to U.S. critical infrastructure networks",
      "group": "volt-typhoon",
      "group_name": "Volt Typhoon",
      "date": "2023-05-24",
      "region": "North America",
      "target": "U.S. critical infrastructure organizations and their IT environments",
      "attribution": "Microsoft and later CISA-led advisories identified Volt Typhoon as a PRC state-sponsored actor using living-off-the-land techniques.",
      "summary": "Volt Typhoon targeted U.S. critical infrastructure with stealthy hands-on-keyboard activity designed for persistence and future options.",
      "description": "Public reporting on Volt Typhoon shifted attention from pure espionage to pre-positioning risk inside critical infrastructure. Microsoft disclosed targeted activity in 2023, and subsequent U.S. government advisories stated that the actor had compromised multiple critical infrastructure IT environments while heavily relying on native system tools rather than obvious malware.",
      "coordinates": {
        "lat": 21.3069,
        "lng": -157.8583
      },
      "techniques": [
        "Living off the land",
        "Credential access",
        "Network discovery",
        "Stealthy persistence in critical infrastructure environments"
      ],
      "effects": [
        "Long-term unauthorized access to infrastructure networks",
        "Reduced visibility because of legitimate tool abuse",
        "Concern about disruptive options in a future crisis"
      ],
      "tags": [
        "critical-infrastructure",
        "living-off-the-land",
        "prc",
        "volt-typhoon",
        "persistence"
      ],
      "timeline": [
        {
          "date": "2023-05-24",
          "title": "Microsoft publishes first disclosure",
          "description": "Microsoft describes stealthy activity by Volt Typhoon targeting U.S. critical infrastructure."
        },
        {
          "date": "2024-02-07",
          "title": "Partner advisory released",
          "description": "CISA and international partners publish additional guidance focused on Volt Typhoon tradecraft and living-off-the-land behavior."
        },
        {
          "date": "2024-03-07",
          "title": "Expanded joint advisory",
          "description": "U.S. agencies state that Volt Typhoon has compromised the IT environments of multiple critical infrastructure organizations."
        }
      ],
      "sources": [
        {
          "label": "Microsoft: Volt Typhoon targets US critical infrastructure with living-off-the-land techniques",
          "url": "https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/"
        },
        {
          "label": "CISA alert on PRC-sponsored Volt Typhoon activity",
          "url": "https://www.cisa.gov/news-events/alerts/2024/02/07/cisa-and-partners-release-advisory-prc-sponsored-volt-typhoon-activity-and-supplemental-living-land"
        },
        {
          "label": "Joint advisory on PRC state-sponsored actors in U.S. critical infrastructure",
          "url": "https://www.cisa.gov/sites/default/files/2024-03/aa24-038a_csa_prc_state_sponsored_actors_compromise_us_critical_infrastructure_3.pdf"
        }
      ]
    },
    {
      "id": "unc3886-vmware-2021",
      "title": "UNC3886 exploitation of VMware vCenter / ESXi environments",
      "group": "unc3886",
      "group_name": "UNC3886",
      "date": "2021-10-01",
      "region": "Global",
      "target": "VMware vCenter, ESXi hosts, and high-value virtualization environments",
      "attribution": "Mandiant and VMware Product Security described UNC3886 as a highly advanced China-nexus espionage group exploiting VMware vulnerabilities since late 2021.",
      "summary": "UNC3886 exploited VMware infrastructure to access virtualization layers, deploy backdoors and move toward high-value systems.",
      "description": "UNC3886 is notable for targeting the virtualization layer itself rather than stopping at guest operating systems. Mandiant reported exploitation of CVE-2023-34048 as far back as late 2021 and tied the actor to custom ESXi backdoors, deep post-compromise tradecraft and strong operational security inside hard targets.",
      "coordinates": {
        "lat": 1.3521,
        "lng": 103.8198
      },
      "techniques": [
        "Zero-day or n-day exploitation of virtualization infrastructure",
        "ESXi backdoor deployment",
        "Guest-to-host and infrastructure pivoting",
        "Stealth-focused post-compromise tradecraft"
      ],
      "effects": [
        "Compromise of high-trust management infrastructure",
        "Broader access to virtualized workloads",
        "High remediation burden in complex enterprise environments"
      ],
      "tags": [
        "vmware",
        "esxi",
        "vcenter",
        "china",
        "zero-day"
      ],
      "timeline": [
        {
          "date": "2021-late",
          "title": "Earliest observed exploitation window",
          "description": "Mandiant reports exploitation of CVE-2023-34048 as far back as late 2021."
        },
        {
          "date": "2023-06-13",
          "title": "Related VMware zero-day reporting",
          "description": "Mandiant publishes separate reporting on UNC3886 exploitation of VMware ESXi zero-day CVE-2023-20867."
        },
        {
          "date": "2024-01-19",
          "title": "Long-term vCenter exploitation disclosed",
          "description": "Mandiant and VMware Product Security publish details on UNC3886 exploitation of VMware vCenter since late 2021."
        },
        {
          "date": "2024-06-18",
          "title": "Follow-on espionage tradecraft detailed",
          "description": "Mandiant publishes additional detail on UNC3886 intrusion paths and post-compromise actions."
        }
      ],
      "sources": [
        {
          "label": "Mandiant / VMware Product Security: Chinese espionage group UNC3886 exploiting vCenter since 2021",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/chinese-vmware-exploitation-since-2021/"
        },
        {
          "label": "Mandiant: VMware ESXi zero-day used by UNC3886",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/vmware-esxi-zero-day-bypass/"
        },
        {
          "label": "Mandiant: Cloaked and Covert – UNC3886 espionage operations",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/uncovering-unc3886-espionage-operations"
        }
      ]
    },
    {
      "id": "wannacry-2017",
      "title": "WannaCry ransomware outbreak",
      "group": "lazarus",
      "group_name": "Lazarus Group",
      "date": "2017-05-12",
      "region": "Global",
      "target": "Windows systems worldwide across healthcare, telecom, logistics and public services",
      "attribution": "The White House, DOJ and later CISA guidance attributed WannaCry to DPRK state-sponsored cyber actors associated with the Lazarus ecosystem.",
      "summary": "WannaCry spread globally in 2017, encrypting systems at scale and disrupting hospitals and other essential services.",
      "description": "WannaCry used a worm-like propagation mechanism to rapidly compromise vulnerable Windows systems worldwide. U.S. government statements later attributed the ransomware to North Korea, and CISA guidance now treats WannaCry 2.0 as a DPRK state-sponsored operation rather than an ordinary criminal ransomware incident.",
      "coordinates": {
        "lat": 51.5072,
        "lng": -0.1276
      },
      "techniques": [
        "Ransomware deployment",
        "Worm-like propagation",
        "Exploitation of vulnerable Windows systems",
        "Mass automated encryption"
      ],
      "effects": [
        "Severe service disruption, including in healthcare",
        "Global operational downtime",
        "Wide-scale emergency patching and recovery"
      ],
      "tags": [
        "ransomware",
        "wannacry",
        "dprk",
        "lazarus",
        "worm"
      ],
      "timeline": [
        {
          "date": "2017-05-12",
          "title": "Global outbreak begins",
          "description": "WannaCry begins rapidly spreading across vulnerable Windows systems worldwide."
        },
        {
          "date": "2017-12-19",
          "title": "White House attribution briefing",
          "description": "The U.S. government publicly attributes WannaCry to North Korea."
        },
        {
          "date": "2018-09-06",
          "title": "DOJ charges North Korean programmer",
          "description": "The Department of Justice links WannaCry 2.0 to North Korean cyber operations in a broader criminal complaint."
        }
      ],
      "sources": [
        {
          "label": "White House briefing on attribution of WannaCry to North Korea",
          "url": "https://trumpwhitehouse.archives.gov/briefings-statements/press-briefing-on-the-attribution-of-the-wannacry-malware-attack-to-north-korea-121917/"
        },
        {
          "label": "DOJ charges North Korean regime-backed programmer in connection with WannaCry",
          "url": "https://www.justice.gov/archives/opa/pr/north-korean-regime-backed-programmer-charged-conspiracy-conduct-multiple-cyber-attacks-and"
        },
        {
          "label": "CISA guidance on the North Korean cyber threat",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-106a"
        }
      ]
    },
    {
      "id": "3cx-supply-chain-2023",
      "title": "3CX desktop application supply-chain compromise",
      "group": "lazarus",
      "group_name": "Lazarus Group",
      "date": "2023-03-29",
      "region": "Global",
      "target": "3CX customers using trojanized desktop application builds on Windows and macOS",
      "attribution": "3CX published Mandiant’s interim findings stating with high confidence that UNC4736 had a North Korean nexus; the broader activity is commonly linked to the Lazarus ecosystem.",
      "summary": "Malicious code inserted into legitimate 3CX software turned a trusted desktop client into a delivery path for follow-on malware.",
      "description": "The 3CX case is a strong modern example of a state-linked software supply-chain intrusion affecting downstream customers through a trusted vendor update. Mandiant’s investigation, published by 3CX, assessed with high confidence that the activity cluster UNC4736 had a North Korean nexus. Later reporting tied the intrusion to a prior compromise in the supplier chain.",
      "coordinates": {
        "lat": 35.1856,
        "lng": 33.3823
      },
      "techniques": [
        "Software supply-chain compromise",
        "DLL sideloading",
        "Multi-stage malware delivery",
        "Command-and-control via staged infrastructure"
      ],
      "effects": [
        "Exposure of downstream enterprise customers",
        "Need to uninstall and replace affected software",
        "Renewed scrutiny of vendor build security"
      ],
      "tags": [
        "3cx",
        "supply-chain",
        "north-korea",
        "software-update",
        "unc4736"
      ],
      "timeline": [
        {
          "date": "2023-03-29",
          "title": "Security vendors flag malicious 3CX app behavior",
          "description": "Public reporting begins to identify the 3CX desktop application as the source of malicious activity."
        },
        {
          "date": "2023-04-11",
          "title": "3CX publishes Mandiant interim assessment",
          "description": "3CX states that Mandiant attributes the activity to UNC4736 with high confidence in a North Korean nexus."
        },
        {
          "date": "2023-04-20",
          "title": "Broader supply-chain chain disclosed",
          "description": "Mandiant reports that the 3CX compromise itself began with a previous software supply-chain compromise."
        }
      ],
      "sources": [
        {
          "label": "3CX security update citing Mandiant interim findings",
          "url": "https://www.3cx.com/blog/news/mandiant-initial-results/"
        },
        {
          "label": "Mandiant: 3CX software supply-chain compromise",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/3cx-software-supply-chain-compromise"
        }
      ]
    },
    {
      "id": "snake-medusa-2023",
      "title": "Operation MEDUSA disruption of Snake malware infrastructure",
      "group": "turla",
      "group_name": "Turla",
      "date": "2023-05-09",
      "region": "Global",
      "target": "Snake-infected systems used as covert relay nodes and victim endpoints worldwide",
      "attribution": "The DOJ attributed Snake to a unit within Center 16 of Russia’s FSB, referred to in court documents as Turla.",
      "summary": "The FBI and partners disrupted Snake, a long-running Russian cyber-espionage tool used against governments, journalists and other high-value targets.",
      "description": "Operation MEDUSA did not mark the start of the Snake campaign, but it is a reliable public anchor for documenting it. According to the DOJ, Turla used versions of Snake for nearly 20 years to steal sensitive documents from victims in at least 50 countries and to relay exfiltration traffic through a covert peer-to-peer network of compromised machines.",
      "coordinates": {
        "lat": 40.7128,
        "lng": -74.006
      },
      "techniques": [
        "Long-term malware implantation",
        "Peer-to-peer covert routing",
        "Data exfiltration through relay nodes",
        "Credential theft via keylogging"
      ],
      "effects": [
        "Long-term compromise of sensitive targets",
        "Global relay network of infected computers",
        "Coordinated international disruption action in 2023"
      ],
      "tags": [
        "snake",
        "turla",
        "fsb",
        "operation-medusa",
        "espionage"
      ],
      "timeline": [
        {
          "date": "2004-2023",
          "title": "Long-running espionage use",
          "description": "Snake remains in use for years against sensitive government and related targets."
        },
        {
          "date": "2023-05-09",
          "title": "Operation MEDUSA announced",
          "description": "The DOJ and FBI announce a court-authorized disruption of the Snake malware network."
        }
      ],
      "sources": [
        {
          "label": "DOJ: Operation MEDUSA disruption of Snake malware network",
          "url": "https://www.justice.gov/archives/opa/pr/justice-department-announces-court-authorized-disruption-snake-malware-network-controlled"
        },
        {
          "label": "CISA and partners disclose Snake malware threat from Russian cyber actors",
          "url": "https://www.cisa.gov/news-events/alerts/2023/05/09/cisa-and-partners-disclose-snake-malware-threat-russian-cyber-actors"
        },
        {
          "label": "NSA statement on identification of Snake infrastructure",
          "url": "https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/3389044/us-agencies-and-allies-partner-to-identify-russian-snake-malware-infrastructure/"
        }
      ]
    }
  ],
  "groups": [
    {
      "id": "sandworm",
      "name": "Sandworm",
      "country": "Russia",
      "summary": "GRU-linked actor repeatedly associated with disruptive and destructive operations against infrastructure, communications and regional adversaries.",
      "description": "Sandworm is one of the most consistently publicly attributed Russian military cyber actors. Joint advisories from the UK and U.S. governments connect Sandworm to GRU activity and link the actor to operations ranging from NotPetya to Cyclops Blink and other infrastructure-focused campaigns. Public reporting often shows a blend of espionage access, sabotage and strategic signaling.",
      "aliases": [
        "APT44",
        "Voodoo Bear",
        "Seashell Blizzard"
      ],
      "objective": "Disruption, sabotage and strategic pressure",
      "status": "Active",
      "focus_areas": [
        "Critical infrastructure",
        "Telecommunications",
        "Government and defense",
        "Regional coercion"
      ],
      "techniques": [
        "Wiper deployment",
        "Supply-chain compromise",
        "Edge device compromise",
        "Living off the land",
        "Operational disruption"
      ],
      "sources": [
        {
          "label": "NCSC / CISA joint notice on Cyclops Blink",
          "url": "https://www.ncsc.gov.uk/news/joint-advisory-shows-new-sandworm-malware-cyclops-blink-replaces-vpnfilter"
        },
        {
          "label": "CISA Russia state-sponsored cyber threat publications",
          "url": "https://www.cisa.gov/topics/cyber-threats-and-advisories/nation-state-cyber-actors/russia/publications"
        }
      ]
    },
    {
      "id": "apt29",
      "name": "APT29",
      "country": "Russia",
      "summary": "Stealth-focused espionage actor commonly linked to the Russian Foreign Intelligence Service.",
      "description": "APT29 is best known publicly for long-term intelligence collection, cloud and email targeting, and highly selective post-compromise tradecraft. Joint advisories and government statements associate the group with the Russian SVR and with operations that emphasize persistence and information theft over noisy disruption.",
      "aliases": [
        "Cozy Bear",
        "The Dukes",
        "Midnight Blizzard"
      ],
      "objective": "Espionage and strategic intelligence collection",
      "status": "Active",
      "focus_areas": [
        "Government",
        "Diplomatic entities",
        "Technology providers",
        "Cloud and identity systems"
      ],
      "techniques": [
        "Supply-chain compromise",
        "Credential theft",
        "Stealthy persistence",
        "Cloud account targeting",
        "Token abuse"
      ],
      "sources": [
        {
          "label": "CISA / FBI / NSA advisory on Russian SVR cyber operations",
          "url": "https://www.cisa.gov/news-events/alerts/2021/04/26/fbi-dhs-cisa-joint-advisory-russian-foreign-intelligence-service-cyber-operations"
        },
        {
          "label": "NCSC advisory on APT29 targeting vaccine development",
          "url": "https://www.ncsc.gov.uk/news/advisory-apt29-targets-covid-19-vaccine-development"
        }
      ]
    },
    {
      "id": "apt28",
      "name": "APT28",
      "country": "Russia",
      "summary": "Russian GRU actor known for aggressive espionage, credential operations and infrastructure abuse.",
      "description": "APT28 has been publicly tied by the UK and U.S. governments to Russia’s GRU Unit 26165. Public case material shows the actor using a mix of phishing, credential operations, router exploitation and bespoke tooling to support military and intelligence collection priorities.",
      "aliases": [
        "Fancy Bear",
        "Sofacy",
        "Sednit",
        "Forest Blizzard"
      ],
      "objective": "Military and political intelligence collection",
      "status": "Active",
      "focus_areas": [
        "Government",
        "Defense",
        "Political organizations",
        "Network infrastructure"
      ],
      "techniques": [
        "Phishing",
        "Credential abuse",
        "Router exploitation",
        "Malware deployment",
        "Reconnaissance"
      ],
      "sources": [
        {
          "label": "NCSC advisory on APT28 exploitation of Cisco routers",
          "url": "https://www.ncsc.gov.uk/news/apt28-exploits-known-vulnerability-to-carry-out-reconnaissance-and-deploy-malware-on-cisco-routers"
        },
        {
          "label": "CISA advisory AA23-108",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-108"
        }
      ]
    },
    {
      "id": "storm-0558",
      "name": "Storm-0558",
      "country": "China",
      "summary": "China-based espionage actor publicly tied by Microsoft to targeted email access using forged authentication tokens.",
      "description": "Storm-0558 entered public view after Microsoft disclosed an intrusion affecting customer email accounts in 2023. Microsoft described the actor as China-based, focused on espionage, data theft and credential access, with particular interest in government agencies in Western Europe and related individuals.",
      "aliases": [
        "No public government alias consensus"
      ],
      "objective": "Cloud and diplomatic intelligence collection",
      "status": "Active",
      "focus_areas": [
        "Government email",
        "Cloud identity",
        "Diplomatic targets"
      ],
      "techniques": [
        "Token forgery",
        "Cloud email access",
        "Credential abuse",
        "Targeted mailbox collection"
      ],
      "sources": [
        {
          "label": "Microsoft MSRC disclosure on Storm-0558",
          "url": "https://www.microsoft.com/en-us/msrc/blog/2023/07/microsoft-mitigates-china-based-threat-actor-storm-0558-targeting-of-customer-email"
        },
        {
          "label": "Microsoft Security analysis of Storm-0558 techniques",
          "url": "https://www.microsoft.com/en-us/security/blog/2023/07/14/analysis-of-storm-0558-techniques-for-unauthorized-email-access/"
        }
      ]
    },
    {
      "id": "volt-typhoon",
      "name": "Volt Typhoon",
      "country": "China",
      "summary": "PRC state-sponsored actor known for stealthy access to critical infrastructure through living-off-the-land techniques.",
      "description": "Public reporting from Microsoft and later U.S. government advisories frame Volt Typhoon as a strategically important actor because of its focus on critical infrastructure pre-positioning. Rather than relying heavily on custom malware, the group is known for hands-on-keyboard operations and abuse of native tools to minimize detection.",
      "aliases": [
        "Volt Typhoon is Microsoft nomenclature"
      ],
      "objective": "Espionage and potential pre-positioning for disruption",
      "status": "Active",
      "focus_areas": [
        "Critical infrastructure",
        "Telecommunications",
        "Transportation",
        "IT and OT-adjacent environments"
      ],
      "techniques": [
        "Living off the land",
        "Credential access",
        "Network discovery",
        "Long-term persistence"
      ],
      "sources": [
        {
          "label": "Microsoft Volt Typhoon disclosure",
          "url": "https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/"
        },
        {
          "label": "CISA fact sheet for critical infrastructure leaders",
          "url": "https://www.cisa.gov/resources-tools/resources/prc-state-sponsored-cyber-activity-actions-critical-infrastructure-leaders"
        }
      ]
    },
    {
      "id": "unc3886",
      "name": "UNC3886",
      "country": "China",
      "summary": "China-nexus espionage actor focused on edge, virtualization and high-trust infrastructure targets.",
      "description": "Mandiant has repeatedly described UNC3886 as a highly advanced China-nexus espionage group with strong tradecraft around virtualization and appliance compromises. The group stands out for targeting vCenter, ESXi and other difficult-to-monitor layers, then using custom backdoors and careful post-compromise steps to protect access.",
      "aliases": [
        "No stable public government alias consensus"
      ],
      "objective": "Long-term access to high-value enterprise infrastructure",
      "status": "Active",
      "focus_areas": [
        "Virtualization infrastructure",
        "Network appliances",
        "Government and telecom targets",
        "High-security enterprise environments"
      ],
      "techniques": [
        "VMware exploitation",
        "Zero-day or n-day exploitation",
        "Custom backdoors",
        "Stealthy persistence"
      ],
      "sources": [
        {
          "label": "Mandiant / VMware Product Security report on UNC3886 and vCenter",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/chinese-vmware-exploitation-since-2021/"
        },
        {
          "label": "Mandiant report on UNC3886 espionage operations",
          "url": "https://cloud.google.com/blog/topics/threat-intelligence/uncovering-unc3886-espionage-operations"
        }
      ]
    },
    {
      "id": "lazarus",
      "name": "Lazarus Group",
      "country": "North Korea",
      "summary": "North Korean state-sponsored umbrella actor associated with espionage, sabotage, ransomware and financially motivated cyber operations.",
      "description": "Lazarus is one of the best known DPRK cyber group names in public reporting. The U.S. Treasury formally identified Lazarus, Bluenoroff and Andariel as agencies, instrumentalities or controlled entities of the Government of North Korea based on their relationship to the Reconnaissance General Bureau. Public casework spans WannaCry, destructive intrusions, financial theft and supply-chain activity.",
      "aliases": [
        "Hidden Cobra",
        "Labyrinth Chollima",
        "Zinc"
      ],
      "objective": "Revenue generation, espionage and strategic disruption",
      "status": "Active",
      "focus_areas": [
        "Financial systems",
        "Software supply chains",
        "Government and defense",
        "Cryptocurrency ecosystem"
      ],
      "techniques": [
        "Ransomware",
        "Supply-chain compromise",
        "Custom malware",
        "Credential theft",
        "Social engineering"
      ],
      "sources": [
        {
          "label": "U.S. Treasury sanctions targeting Lazarus Group",
          "url": "https://home.treasury.gov/news/press-releases/sm774"
        },
        {
          "label": "CISA guidance on the North Korean cyber threat",
          "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-106a"
        }
      ]
    },
    {
      "id": "turla",
      "name": "Turla",
      "country": "Russia",
      "summary": "FSB-linked espionage actor associated with the long-running Snake malware ecosystem and other stealthy collection operations.",
      "description": "Turla is publicly tied by U.S. authorities to a unit within Center 16 of Russia’s Federal Security Service. The group is widely known for long-lived espionage campaigns, covert routing infrastructure and carefully engineered malware families used against governments, diplomatic entities, journalists and research targets.",
      "aliases": [
        "Snake",
        "Uroburos",
        "Venomous Bear",
        "Waterbug"
      ],
      "objective": "Long-term intelligence collection",
      "status": "Active",
      "focus_areas": [
        "Government",
        "Diplomatic communications",
        "Research institutions",
        "Journalists and sensitive networks"
      ],
      "techniques": [
        "Long-term malware implants",
        "Peer-to-peer covert routing",
        "Credential theft",
        "Selective exfiltration"
      ],
      "sources": [
        {
          "label": "DOJ announcement on Operation MEDUSA and Snake",
          "url": "https://www.justice.gov/archives/opa/pr/justice-department-announces-court-authorized-disruption-snake-malware-network-controlled"
        },
        {
          "label": "NSA statement on Snake infrastructure identification",
          "url": "https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/3389044/us-agencies-and-allies-partner-to-identify-russian-snake-malware-infrastructure/"
        }
      ]
    }
  ],
  "posts": [
    {
      "id": "welcome-to-cyber-footprints",
      "title": "Welcome to Cyber Footprints",
      "date": "2026-03-17",
      "category": "Site note",
      "excerpt": "A short introduction to the project, what it tracks, and how incident pages and actor profiles are selected.",
      "summary": "Cyber Footprints is a personal research notebook dedicated to publicly documented state-linked cyber operations. The goal is not to publish hot takes or speculation, but to keep a structured archive of cases where the public record is strong enough to be useful.",
      "content": [
        "Cyber Footprints is a personal archive of publicly reported and publicly attributed cyber operations linked to state actors or state-aligned groups.",
        "The site is organized around three ideas: a map-based overview, incident pages that summarize what happened and why it mattered, and actor profiles that make it easier to connect campaigns over time.",
        "For now, the project starts with a small set of documented cases and a simple publishing workflow on GitHub Pages. Over time, I want to expand the archive, refine source grading, and add more structured notes on tradecraft, targeting, and operational patterns.",
        "The editorial rule is straightforward: if the attribution is weak or mostly speculative, it does not belong here yet. Preference goes to government advisories, court filings, sanctions material, incident-owner disclosures, and named investigations from established security teams."
      ],
      "tags": [
        "welcome",
        "editorial",
        "methodology"
      ],
      "featured": true
    }
  ]
};
