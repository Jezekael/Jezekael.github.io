---
title: "A free sandbox to test your skills: 120+ free TryHackMe rooms"
short_title: Free TryHackMe rooms
date: 2026-10-10
category: Resources
description: "A hand-picked, no-signup-fee collection of 120+ free TryHackMe rooms across 8 topics, plus a minimal example write-up so you can see the format before you try it yourself."
tags: [tryhackme, ctf, learning, resources]
info: { Rooms: "127", Topics: "8", Cost: "Free" }
---
Before you pay for a subscription anywhere, it's worth knowing how much is available for free. TryHackMe
publishes a running list of rooms that don't require premium, and the community maintains a curated PDF
with **127 free rooms across 8 core topics**: a solid, no-cost sandbox to try out a skill or a methodology
end to end. [120+ Free TryHackMe
Rooms](https://7168674.fs1.hubspotusercontent-na1.net/hubfs/7168674/120%2B%20Free%20TryHackMe%20rooms.pdf?ref=blog.tryhackme.com).

## Why this is worth bookmarking

A lot of learning material explains concepts in the abstract. A room gives you a real target, a real
shell, and immediate feedback on whether your approach actually works, without needing a lab of your own
or a subscription. That's the whole point of a sandbox: low stakes, fast iteration, you break it and reset
it as many times as you want.

## The 8 topics

| # | Topic | Free rooms |
|---|---|---|
| 1 | Networking | 29 |
| 2 | Tooling | 11 |
| 3 | Active Directory | 9 |
| 4 | Windows | 17 |
| 5 | Malware | 12 |
| 6 | Reverse Engineering | 7 |
| 7 | Web | 21 |
| 8 | Forensics | 21 |
{: .data-table}

That's 127 rooms total (some appear in more than one topic, e.g. a Windows room that's also relevant to
Forensics). Pick a topic you're weakest in and start there; the rooms are graded roughly beginner to harder
within each section.

## How to use it well

- Don't look up the walkthrough first. Enumerate, try, get stuck, *then* read a hint.
- Keep a scratch file of commands that worked and why. It becomes your own cheat sheet over time.
- Time-box each room. If you're stuck for an hour with no new leads, that's a good moment to peek at a
  write-up for the one step you're missing, not the whole solution.

## A minimal example: ColddBox: Easy

To show the format I use for this myself, I solved the **ColddBox: Easy** room (`colddboxeasy`, listed
under the Web topic in the PDF above) and wrote it up, deliberately without screenshots or hardcoded
answers (no passwords, no flags). Each step is a collapsible toggle so you can read "what to do and why"
without spoiling the next move:

[ColddBox: Easy, minimal write-up](../../projects/writeups/tryhackme/colddbox-easy.html)

It's a good first pick from the Web section: WordPress enumeration, a login brute force, a web shell, and a
straightforward privilege escalation, enough ground to exercise a full methodology in one sitting.
