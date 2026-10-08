---
title: "NotPetya destructive malware campaign"
date: 2017-06-27
group: sandworm
region: "Europe"
target: "Ukrainian organizations first, with global spillover across multiple sectors"
attribution: "The U.S. and UK governments publicly attributed NotPetya to the Russian military; later DOJ charges tied the malware family to GRU officers associated with Sandworm operations."
description: "A destructive campaign masquerading as ransomware spread from Ukraine into multinational networks and caused major operational losses worldwide."
coordinates: { lat: 50.4501, lng: 30.5234 }
techniques:
  - "Supply-chain compromise"
  - "Wiper / pseudo-ransomware deployment"
  - "Credential theft and lateral movement"
  - "Operational disruption"
effects:
  - "Business interruption across multiple countries"
  - "Data destruction and system rebuilds"
  - "Massive financial losses and collateral impact"
tags: [wiper, notpetya, ukraine, supply-chain, gru]
timeline:
  - date: 2017-06-27
    title: "Malware outbreak begins"
    description: "The destructive malware begins spreading from initially affected organizations in Ukraine."
  - date: 2018-02-15
    title: "Public state attribution"
    description: "The White House publicly states that the attack was part of the Kremlin’s effort to destabilize Ukraine."
  - date: 2020-10-19
    title: "DOJ indictment references NotPetya"
    description: "The U.S. Department of Justice charges GRU officers in connection with destructive malware operations including NotPetya."
sources:
  - label: "White House statement on attribution of NotPetya"
    url: https://trumpwhitehouse.archives.gov/briefings-statements/statement-press-secretary-25/
  - label: "CISA Petya / NotPetya alert updated with U.S. attribution"
    url: https://www.cisa.gov/news-events/alerts/2017/07/01/petya-ransomware
  - label: "DOJ indictment of Russian GRU officers for destructive malware operations"
    url: https://www.justice.gov/archives/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and
---
NotPetya began through the compromise of Ukrainian software supply-chain infrastructure and quickly
spread into global corporate environments. Although it presented as ransomware, public attribution
and later legal action treated it as a destructive operation aligned with Russian military
objectives against Ukraine, with indiscriminate worldwide impact.
