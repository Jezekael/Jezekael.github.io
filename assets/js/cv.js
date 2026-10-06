/* Interactive résumé viewer: renders an expandable timeline from inlined data
   so it works offline (file://) without any fetch. Uses native
   <details>/<summary> for keyboard accessibility. Keep this in sync with
   data/cv.json (kept as the human-readable source of truth). */
(function initCv() {
  const wrap = document.getElementById('cv-timeline');
  if (!wrap) return;

  const CV_DATA = {
    name: 'Jezekael Brunon',
    headline: 'Offensive Cyber Security Consultant · Auditor · Pentester',
    location: 'Paris, France',
    links: {
      github: 'https://github.com/Jezekael',
      linkedin: 'https://www.linkedin.com/in/jezekael-brunon/',
      scholar: 'https://scholar.google.com/citations?user=IgDCB5wAAAAJ&hl=en&oi=ao',
      email: 'mailto:jezekael.brunon@gmail.com',
    },
    pdf: 'assets/BRUNON_Jezekael_CV_ENG.pdf',
    experience: [
      {
        id: 'exp-akvize',
        role: 'Offensive Cyber Security Consultant',
        org: 'AKVIZE',
        start: '2025',
        end: 'present',
        summary: 'Offensive security engagements: penetration testing, security audits, and red-team-style assessments.',
        details: {
          responsibilities: ['Deliver security, IT and architecture assessments for clients across various industries (governance, cloud/on-prem, network exposure, application security). Perform black-box web penetration tests on client assets.'],
          stack: ['Nmap, Nessus, Metasploit, Kali Linux, BloodHound, PingCastle, Mimikatz, Burp Suite, Nuclei, CVE, SIEM, firewall, WAF, IDS/IPS'],
          achievements: ['Designed a commercial 360° cyber audit solution (applications, cloud, systems, networks) in Python/Go, automating key steps of the pentesting process, complemented by manual analysis.'],
        },
      },
      {
        id: 'exp-crns',
        role: 'Research Assistant Internship',
        org: 'CNRS',
        start: '2023',
        end: '2024',
        summary: 'Worked on Privacy-preserving decentralized learning, analyzed the effectiveness of privacy attacks against decentralized learning with dynamic topologies.',
        details: {
          responsibilities: ['Developped a framework to simulate theses attacks and collected data on agaisnt the decentralized learning model'],
          stack: ['Distributed systems, GPU, PyTorch, TensorFlow, gradient inversion, membership inference attacks MIA'],
          achievements: ['Published paper: Scrutinizing the Vulnerability of Decentralized Learning to Membership Inference Attacks'],
        },
      },
    ],
    education: [
      {
        id: 'edu-insa',
        school: 'INSA de Lyon',
        program: 'Master of Engineering in Telecommunications',
        start: '2020',
        end: '2025',
        details: { notes: ["Engineering Degree in Telecommunications (INSA Lyon, TC dept.)<br> - Foundation in mathematics, physics, mechanics, chemistry, and computer science, completed by humanities and languages.<br>- Networks & Internet <br>- Radio, Mobile & Satellite<br>- Signal Processing<br>- IT & Systems <br>- Cybersecurity<br>- Projects & Corporate Business"] },
      },
    ],
    skills: {
      offensive: ['Web Penetration testing', 'Security auditing', 'Forensic', 'Incident Remediation'],
      research: ['Threat intelligence', 'OSINT'],
      interests: ['RF / SDR', 'CTF', 'Satellite security'],
    },
    certifications: [
      { name: 'Ethical Hacker', issuer: 'CISCO', year: '2025' },
    ],
  };

  const list = (arr, label) => (arr && arr.length
    ? `<h4>${escapeHtml(label)}</h4><ul class="bullet-list">${arr.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>`
    : '');

  const linkList = (arr) => (arr && arr.length
    ? `<p>${arr.map((l) => `<a class="text-link" href="${escapeHtml(l.url)}">${escapeHtml(l.label)}</a>`).join(' · ')}</p>`
    : '');

  const renderItems = (items) => (items || []).map((e) => `
    <details class="tl-item" id="${escapeHtml(e.id || '')}">
      <summary>
        <span class="tl-role">${escapeHtml(e.role || e.program || '')}</span>
        <span class="tl-org">${escapeHtml(e.org || e.school || '')}</span>
        <span class="tl-dates">${escapeHtml(e.start || '')} – ${escapeHtml(e.end || '')}</span>
      </summary>
      ${e.summary ? `<p class="out">${escapeHtml(e.summary)}</p>` : ''}
      ${list(e.details && e.details.responsibilities, 'Responsibilities')}
      ${e.details && e.details.stack ? `<h4>Tech stack</h4><p>${e.details.stack.map(escapeHtml).join(' · ')}</p>` : ''}
      ${list(e.details && e.details.achievements, 'Achievements')}
      ${list(e.details && e.details.notes, 'Notes')}
      ${linkList(e.details && e.details.links)}
    </details>`).join('');

  const skillsBlock = (skills) => {
    if (!skills) return '';
    return `<div class="cv-skills">${Object.entries(skills).map(([k, v]) => `
      <div class="meta-card">
        <h3>${escapeHtml(k.replace(/_/g, ' '))}</h3>
        <ul class="tag-list">${(v || []).map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ul>
      </div>`).join('')}</div>`;
  };

  Promise.resolve(window.CV_DATA || CV_DATA)
    .then((cv) => {
      const nameEl = document.getElementById('cv-name');
      const headEl = document.getElementById('cv-headline');
      const locEl = document.getElementById('cv-location');
      const pdfEl = document.getElementById('cv-pdf');
      if (nameEl) nameEl.textContent = cv.name || '';
      if (headEl) headEl.textContent = cv.headline || '';
      if (locEl) locEl.textContent = cv.location || '';
      if (pdfEl && cv.pdf) pdfEl.href = cv.pdf;

      const linksEl = document.getElementById('cv-links');
      if (linksEl && cv.links) {
        linksEl.innerHTML = Object.entries(cv.links)
          .filter(([, url]) => url && !String(url).startsWith('TODO'))
          .map(([k, url]) => `<li><a href="${escapeHtml(url)}">${escapeHtml(k)}</a></li>`)
          .join('');
      }

      let html = '';
      if (cv.experience) html += '<h2>Experience</h2>' + renderItems(cv.experience);
      if (cv.education) html += '<h2>Education</h2>' + renderItems(cv.education);
      wrap.innerHTML = html;

      const skillsEl = document.getElementById('cv-skills');
      if (skillsEl) skillsEl.innerHTML = skillsBlock(cv.skills);

      const certsEl = document.getElementById('cv-certs');
      if (certsEl && cv.certifications) {
        certsEl.innerHTML = cv.certifications
          .map((c) => `<li>${escapeHtml(c.name)}, ${escapeHtml(c.issuer)} (${escapeHtml(String(c.year))})</li>`)
          .join('');
      }
    })
    .catch((error) => {
      console.error(error);
      wrap.innerHTML = '<p class="empty-state">Could not load résumé data.</p>';
    });
})();
