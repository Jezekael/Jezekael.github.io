---
kind: note
title: "TLS certificate lifetimes are shrinking. Manual renewal is over."
date: 2026-03-20
category: "Research note"
description: "The public TLS ecosystem has crossed an operational threshold. Shorter certificate lifetimes mean certificate lifecycle management has to move from reminder-driven administration to reliable automation, with ACME at the center for most environments."
tags: [tls, pki, acme, automation]
---
The practical message behind the latest certificate-validity changes is simple: the old annual-
renewal habit is finished. The maximum validity period for public TLS certificates drops to 200 days
in March 2026, then 100 days in 2027, and 47 days in 2029. At that point, any environment still
relying on calendar reminders, spreadsheets, or manual CSR workflows is carrying avoidable outage
risk.

That is why ACME matters so much. Once certificate lifetimes become this short, the real challenge
is not creating a certificate once. It is proving that issuance, renewal, validation, deployment,
rollback, and monitoring all work reliably and repeatedly across the actual estate: reverse proxies,
load balancers, VPN portals, ingress controllers, appliances, and internal ownership boundaries.

The operational implication is broader than TLS hygiene. Short-lived certificates force teams to
inventory their exposed services, map control points for HTTP-01, DNS-01, or TLS-ALPN-01 challenges,
and find every brittle dependency that assumes certificates change rarely. In many organizations,
that work exposes hidden PKI debt faster than any architecture review would.

The other reason this topic matters now is timing. If teams are already being pushed to modernize
certificate lifecycle management, this is the right moment to think about crypto agility as well.
Post-quantum migration is not solved by shorter certificate lifetimes, but the same disciplines
apply: inventory, automation, dependency reduction, and repeatable change management. A certificate
program that cannot survive 47-day renewals will not adapt gracefully to larger cryptographic
transitions either.
