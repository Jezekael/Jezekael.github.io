---
title: Set up Hack-A-Sat challenges locally
short_title: Local setup
date: 2026-01-02
category: Write-up / guide
description: "Every Hack-A-Sat qualifier is open-sourced by Cromulence under MIT. Here is how to build and run the challenges on your own machine."
tags: [ctf, space, hack-a-sat, docker]
info: { License: "Challenges: MIT (Cromulence)" }
---
## Prerequisites

A Linux host (or WSL2), **Docker** plus build tools, `git`, `socat`, and patience for building
emulator and toolchain base images. All challenge code is MIT-licensed by Cromulence.

## Repositories

- 2020 (HAS1) qualifier:
  [`cromulencellc/hackasat-qualifier-2020`](https://github.com/cromulencellc/hackasat-qualifier-2020)
  (branch `master`)
- 2021 (HAS2) qualifier:
  [`cromulencellc/hackasat-qualifier-2021`](https://github.com/cromulencellc/hackasat-qualifier-2021)
  (branch `main`)
- 2022 (HAS3) qualifier:
  [`cromulencellc/hackasat-qualifier-2022`](https://github.com/cromulencellc/hackasat-qualifier-2022)
  (branch `release`)
- Tech-paper solution repos: `-techpapers` variants per year; finals under `hackasat-final-2020`,
  `-2021`, `-finals-2022`, `-finals-2023`.

## What is included vs. not

**Released:** all challenge source, solvers, and per-challenge build infrastructure. **Not
released:** the game host infra, scoreboard, and the `ticket-taker` / `lifecycle-manager` /
`sat-solver` programs. During the live event, `ticket-taker` turned a team ticket into a `SEED` and
`FLAG` and launched the container with those env vars; locally you supply them yourself.

## Steps

1. Clone a year's repo and read the root `README.md` (category → folder map) and each per-challenge
   `README.md`.
2. If a challenge uses a generator, build the base image first: `cd generator-base && make`.
   2021/2022 also need `microblaze-user-toolchain` for some challenges; 2020 needs `qemu-sparc`,
   `rtems` and `vmips-mips-emulator` for the SPARC / LaunchLink challenges.
3. Build the challenge: `cd <challenge> && make build` (produces `<name>:generator`,
   `<name>:challenge`, `<name>:solver` as applicable).
4. Generate per-seed files (if required):

```bash
docker run -t --rm -v "$PWD/out":/out -e SEED=1234 -e FLAG='flag{test}' <name>:generator
```

Run the challenge locally:

```bash
# simple
docker run --rm -i -e SEED=1234 -e FLAG='flag{test}' <name>:challenge

# with generated files
docker run --rm -i -e DIR=/mnt -v "$PWD/out":/mnt -e SEED=1234 -e FLAG='flag{test}' <name>:challenge

# expose a port without xinetd
socat -v tcp-listen:5000,reuseaddr "exec:docker run --rm -i -e SEED=1234 -e FLAG='flag{test}' <name>\:challenge"
```

(Escape colons inside the `exec:` string with backslashes.) Verify with the solver:

```bash
docker run -it --rm -e HOST=127.0.0.1 -e PORT=5000 <name>:solver
```

To reproduce the exact instance a team received in the live game, use the year's tickets → seeds
"decoder ring" CSV in the repo root (e.g. `2022_tickets_export_2022_06_27.csv`).

## Common pitfalls

- Forgetting to build `generator-base` / the toolchain first.
- Missing `SEED` / `FLAG` env vars.
- Colon-escaping in `socat`.
- Emulator images (QEMU-SPARC, vmips, MicroBlaze) being slow and large to build.
- Solvers implement *a* solution, not necessarily *the* only one.
- Some challenges need a managed connection (`SERVICE_HOST` / `SERVICE_PORT`) the local infra does
  not replicate.

Looking for per-challenge write-ups? See the [Hack-A-Sat write-ups index](./).
