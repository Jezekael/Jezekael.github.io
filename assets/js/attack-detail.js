(async function initIncidentPage() {
  try {
    const { incidents } = await loadDataset();
    const incidentId = getQueryParam('id');
    const incident = incidents.find(item => item.id === incidentId) || incidents[0];

    if (!incident) return;

    document.title = `${incident.title} · State Actor Atlas`;
    document.getElementById('incident-breadcrumb').textContent = incident.title;
    document.getElementById('incident-region').textContent = incident.region;
    document.getElementById('incident-title').textContent = incident.title;
    document.getElementById('incident-summary').textContent = incident.summary;
    document.getElementById('incident-description').textContent = incident.description;
    document.getElementById('incident-group').textContent = incident.group_name;
    document.getElementById('incident-target').textContent = incident.target;
    document.getElementById('incident-date').textContent = formatDate(incident.date);
    document.getElementById('incident-region-meta').textContent = incident.region;
    document.getElementById('incident-attribution').textContent = incident.attribution;

    document.getElementById('incident-techniques').innerHTML = incident.techniques
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    document.getElementById('incident-effects').innerHTML = incident.effects
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    document.getElementById('incident-tags').innerHTML = incident.tags
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    document.getElementById('incident-timeline').innerHTML = incident.timeline
      .map(item => `
        <article class="timeline-item">
          <div class="timeline-date">${escapeHtml(item.date)}</div>
          <div class="timeline-content">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </article>
      `)
      .join('');

    document.getElementById('incident-sources').innerHTML = incident.sources
      .map(source => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>`)
      .join('');
  } catch (error) {
    console.error(error);
  }
})();
