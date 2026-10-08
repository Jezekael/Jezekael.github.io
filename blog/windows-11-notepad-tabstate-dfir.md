---
kind: note
title: "Windows 11 Notepad TabState artifacts are worth collecting"
date: 2026-03-20
category: "DFIR note"
description: "A small Windows 11 DFIR detail can have outsized value: unsaved Notepad tab content may still be written to disk. That makes modern Notepad session artifacts worth checking during triage, especially when operators assume temporary text was never persisted."
tags: [dfir, windows-11, notepad, artifacts]
---
A recent field note highlighted something many responders still overlook: Windows 11 Notepad can
persist unsaved tab content to disk under the application package path in LocalState TabState. That
means content pasted into Notepad during an intrusion or during routine administration may survive
longer than users expect, even if the text was never formally saved as a document.

From a DFIR perspective, this is useful because Notepad is often treated as operationally invisible.
In reality, it is exactly the kind of low-friction scratch space where operators paste commands,
credentials, hostnames, IP ranges, snippets of logs, or investigative notes. If those artifacts
remain on disk, they can help reconstruct activity that would otherwise be absent from the usual
document or browser trails.

The security lesson cuts both ways. Defenders should add the path to collection and triage
checklists where Windows 11 endpoints are in scope. Red-team operators and attackers should read the
same fact as a reminder that ephemeral habits are rarely as ephemeral as they feel. Closing a window
is not the same thing as securely disposing of the underlying content.

There are limits. Session restoration behavior depends on how the application is closed and on the
relevant setting for restoring previous content. That makes this an evidence source to validate, not
a magic artifact that exists on every system. Even with that caveat, the collection cost is low
enough that it belongs in practical DFIR workflow.
