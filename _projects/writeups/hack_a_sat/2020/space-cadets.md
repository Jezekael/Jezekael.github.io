---
title: "Hack-A-Sat 2020: Space Cadets"
short_title: Space Cadets
date: 2026-10-06
category: CTF write-up
description: "The warm-up category of the 2020 Hack-A-Sat qualifier: two time-bomb services that only a script can beat."
tags: [ctf, hack-a-sat, space, scripting]
info: { Event: "Hack-A-Sat 2020 qualifier", Challenges: "basic-service, basic-handoff" }
---
Space Cadets is the warm-up category of the 2020 qualifier. Its challenges don't teach any space
physics. They make sure your tooling works before the real ones start. To run them yourself, see the
[local setup guide](../local-setup.html).

## Lt. Starbuck (`basic-service`) {#basic-service}

Connecting with netcat shows an equation, and a few seconds later the connection closes. I can't
solve that by hand in such a short time (or I'm just lazy, I'm only human after all).

This is a typical **time bomb**: the server only accepts answers faster than a human can type them.
Python would be overkill here, so I wrote a short bash loop that reads each equation, computes the
result and sends it back before the timer runs out.

Solved!

## Capt. Solo (`basic-handoff`) {#basic-handoff}

Another time bomb, and this one is straightforward. Once the service is up, the flag is served over
HTTP on port 8080:

```console
$ curl http://localhost:8080/flag.html
flag{Hubble_Space_Telescope_Is_Amazing}
```

Next up: the [AAAA category](aaaa.html), where the real astronomy starts.
