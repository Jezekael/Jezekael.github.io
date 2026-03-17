(async function initGroupDetail() {
  try {
    const { groups, incidents } = await loadDataset();
    const groupId = getQueryParam('id');
    const group = groups.find(item => item.id === groupId) || groups[0];

    if (!group) return;

    document.title = `${group.name} · State Actor Atlas`;
    document.getElementById('group-breadcrumb').textContent = group.name;
    document.getElementById('group-country').textContent = group.country;
    document.getElementById('group-name').textContent = group.name;
    document.getElementById('group-summary').textContent = group.summary;
    document.getElementById('group-description').textContent = group.description;
    document.getElementById('group-country-meta').textContent = group.country;
    document.getElementById('group-objective').textContent = group.objective;
    document.getElementById('group-status').textContent = group.status;

    document.getElementById('group-aliases').innerHTML = group.aliases
      .map(alias => `<li>${escapeHtml(alias)}</li>`)
      .join('');

    document.getElementById('group-focus').innerHTML = group.focus_areas
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    document.getElementById('group-techniques').innerHTML = group.techniques
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    document.getElementById('group-sources').innerHTML = group.sources
      .map(source => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a></li>`)
      .join('');

    const related = incidents
      .filter(item => item.group === group.id)
      .sort((a, b) => compareDates(b.date, a.date));

    document.getElementById('group-incidents').innerHTML = related.length
      ? related.map(item => `
          <article>
            <h3><a href="attack.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a></h3>
            <p>${escapeHtml(item.summary)}</p>
            <div class="mini-meta">
              <span>${formatDate(item.date)}</span>
              <span>•</span>
              <span>${escapeHtml(item.target)}</span>
            </div>
          </article>
        `).join('')
      : '<p class="empty-state">No linked incidents yet.</p>';
  } catch (error) {
    console.error(error);
  }
})();
