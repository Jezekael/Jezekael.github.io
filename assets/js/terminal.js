/* Terminal typewriter hero.
   Data-driven, honours prefers-reduced-motion, and pulls the live incident
   count from the data-incidents attribute set at build time. */
(function initTerminal() {
  const el = document.getElementById('term');
  if (!el) return;

  const exploitCount = el.dataset.incidents || 14;

  const lines = [
    { type: 'prompt', cmd: 'whoami' },
    { type: 'out', text: 'jezekael: offensive security consultant · auditor · pentester @ AKVIZE' },
    { type: 'prompt', cmd: 'cat ./mission.txt' },
    { type: 'out', text: 'Documenting state-linked cyber operations and the tradecraft behind them.' },
    { type: 'prompt', cmd: './start_learning.sh' },
    { type: 'ok', text: '[+] Initializing incident database...' },
    { type: 'ok', text: `[+] Loading ${exploitCount} documented operations...` },
    { type: 'ok', text: '[+] Access granted.' },
    { type: 'prompt', cmd: 'cat skills.txt' },
    { type: 'out', text: 'recon · web · network · RF/SDR · CTF · threat-intel · OSINT' },
  ];

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function appendPrompt(line, instant) {
    const p = document.createElement('span');
    p.className = 'prompt';
    p.textContent = '$ ';
    el.appendChild(p);
    const c = document.createElement('span');
    c.className = 'cmd';
    el.appendChild(c);
    if (instant) {
      c.textContent = line.cmd;
      el.appendChild(document.createTextNode('\n'));
      return Promise.resolve();
    }
    return (async () => {
      for (const ch of line.cmd) {
        c.textContent += ch;
        await sleep(36);
      }
      el.appendChild(document.createTextNode('\n'));
    })();
  }

  function appendOutput(line) {
    const span = document.createElement('span');
    span.className = line.type === 'ok' ? 'ok' : 'out';
    span.textContent = line.text;
    el.appendChild(span);
    el.appendChild(document.createTextNode('\n'));
  }

  function addCursor() {
    const p = document.createElement('span');
    p.className = 'prompt';
    p.textContent = '$ ';
    el.appendChild(p);
    const cur = document.createElement('span');
    cur.className = 'cursor';
    cur.textContent = ' ';
    el.appendChild(cur);
  }

  async function run() {
    for (const line of lines) {
      if (line.type === 'prompt') {
        await appendPrompt(line, reduce);
      } else {
        appendOutput(line);
      }
      if (!reduce) await sleep(240);
    }
    addCursor();
  }

  run();
})();
