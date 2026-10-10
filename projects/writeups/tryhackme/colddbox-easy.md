---
title: "ColddBox: Easy, minimal write-up"
short_title: ColddBox Easy
date: 2026-10-10
category: TryHackMe
description: "A spoiler-free, toggle-by-toggle methodology for the ColddBox: Easy room; no screenshots, no hardcoded flags or passwords."
tags: [tryhackme, ctf, wordpress, linux, web, privesc]
info: { Room: "colddboxeasy", Platform: "TryHackMe", Difficulty: "Easy" }
---
A WordPress box: enumerate the app, get a foothold through the CMS, then escalate locally. No
screenshots, no passwords, no flags below. Each toggle gives the *command and the reasoning*, not the
result, so open them one at a time as you get stuck rather than reading ahead. If you want the fully
spoiled version afterwards, [this InfoSec Writeups
walkthrough](https://infosecwriteups.com/colddbox-easy-vulnhub-walkthrough-cac3680e03c2) is the one I
solved it closest to.

Room: `colddboxeasy`. See the [free-rooms list](../../../blog/posts/free-tryhackme-rooms-sandbox.html) for
how I found it.

## Methodology

<details class="tl-item"><summary>1. Host discovery &amp; port scan</summary>
<p>Start with a full TCP port scan before anything else. Assuming only 80/443 are open is how you miss
the one service that matters.</p>
<pre><code>nmap -p- -T4 -sV &lt;target-ip&gt;</code></pre>
<p><strong>Why:</strong> establishes the attack surface. Expect a web server and very likely SSH. SSH
being open tells you a valid credential pair, found anywhere later, is a second way in, not just a
dead end.</p>
</details>

<details class="tl-item"><summary>2. Web + directory enumeration</summary>
<pre><code>gobuster dir -u http://&lt;target-ip&gt;/ -w /usr/share/wordlists/dirb/common.txt -x php</code></pre>
<p><strong>Why:</strong> confirms the CMS (WordPress gives itself away via <code>/wp-login.php</code>,
<code>/wp-content/</code>, readme files, etc.) and surfaces any extra paths worth checking by hand.</p>
</details>

<details class="tl-item"><summary>3. Fingerprint the CMS and enumerate users</summary>
<pre><code>wpscan --url http://&lt;target-ip&gt;/ --enumerate u</code></pre>
<p><strong>Why:</strong> WordPress happily tells you which usernames exist. A valid username turns a
"guess everything" brute force into a much smaller, much faster one.</p>
</details>

<details class="tl-item"><summary>4. Brute-force the login</summary>
<pre><code>wpscan --url http://&lt;target-ip&gt;/ --usernames &lt;found-user&gt; --passwords /usr/share/wordlists/rockyou.txt</code></pre>
<p><strong>Why:</strong> WordPress's default login form has no rate limiting or lockout here, so a
dictionary attack against a known-valid username is cheap and often works. (<code>hydra</code> against
<code>wp-login.php</code> is an equally valid alternative tool for the same step.)</p>
</details>

<details class="tl-item"><summary>5. Turn admin access into code execution</summary>
<p>Once logged into <code>/wp-admin/</code> as an administrator, WordPress lets you edit theme PHP files
directly from the dashboard (Appearance → Theme Editor).</p>
<p><strong>Why:</strong> the theme editor writes arbitrary PHP to disk under the web root. Dropping a
small PHP reverse-shell payload into a template file (e.g. the 404 template) and then requesting that
page executes it as the web server user. No file-upload plugin or vulnerability needed: admin access on
a CMS is code execution by design.</p>
</details>

<details class="tl-item"><summary>6. Catch the shell and stabilize it</summary>
<pre><code>nc -lvnp 4444
# then trigger the payload by requesting the modified page
python3 -c 'import pty; pty.spawn("/bin/bash")'</code></pre>
<p><strong>Why:</strong> a raw netcat shell is clumsy (no job control, easy to lose). Spawning a real
TTY makes the rest of the enumeration far less painful.</p>
</details>

<details class="tl-item"><summary>7. Loot configuration for reusable credentials</summary>
<pre><code>cat wp-config.php</code></pre>
<p><strong>Why:</strong> WordPress stores its database credentials in plaintext in this file. People
reuse passwords between the DB, the CMS and the OS far more often than they should, so it's always worth
trying anything found here against SSH and <code>su</code> for any local user later.</p>
</details>

<details class="tl-item"><summary>8. Enumerate for local privilege escalation</summary>
<pre><code>sudo -l
find / -perm -4000 -type f 2>/dev/null
crontab -l; cat /etc/crontab
</code></pre>
<p><strong>Why:</strong> once you're a low-privilege local user, the standard trio (sudo rights,
SUID binaries, and anything root runs on a schedule) covers the vast majority of easy-box privilege
escalation paths. Whichever one turns something up is your route to root.</p>
</details>

<details class="tl-item"><summary>9. Escalate and confirm</summary>
<p>Use whatever the previous step surfaced (a sudo-able binary, a SUID binary with a known
<a href="https://gtfobins.github.io/">GTFOBins</a> technique, or a writable root-owned cron script) to get
a root shell, then confirm with <code>id</code>.</p>
<p><strong>Why GTFOBins specifically:</strong> for an SUID or sudo-permitted binary, it's the fastest way
to check whether that binary has a known privilege-escalation trick before trying to work one out from
scratch.</p>
</details>

## Takeaway

Nothing here is box-specific magic: enumerate thoroughly, let the CMS's own admin features hand you code
execution, loot configs for reused credentials, then run the standard local-privesc checklist. That
sequence (recon → foothold → loot → privesc → root) is the methodology, and it transfers to almost any
other "easy" box.
