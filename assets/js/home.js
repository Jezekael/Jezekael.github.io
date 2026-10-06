/* Home page: incident map + featured incidents/groups.
   Null-safe so it coexists with the terminal hero (terminal.js) and the
   latest-content feed (content-index.js). */
(async function initHome() {
  try {
    const { incidents, groups } = await loadDataset();

    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    setText('hero-incident-count', incidents.length);
    setText('hero-group-count', groups.length);

    const groupFilter = document.getElementById('group-filter');
    const regionFilter = document.getElementById('region-filter');
    const resultsContainer = document.getElementById('map-results');
    const featuredContainer = document.getElementById('featured-incidents');
    const featuredGroupsContainer = document.getElementById('featured-groups');

    if (featuredContainer) {
      featuredContainer.innerHTML = [...incidents]
        .sort((a, b) => compareDates(b.date, a.date))
        .slice(0, 6)
        .map(cardMarkup)
        .join('');
    }

    if (featuredGroupsContainer) {
      featuredGroupsContainer.innerHTML = [...groups]
        .slice(0, 6)
        .map((group) => `
          <article class="card">
            <div class="card-header">
              <div>
                <span class="badge">${escapeHtml(group.country || 'Unknown')}</span>
                <h3><a href="group.html?id=${encodeURIComponent(group.id)}">${escapeHtml(group.name)}</a></h3>
              </div>
            </div>
            <p>${escapeHtml(group.summary)}</p>
            <div class="mini-meta"><span>${escapeHtml(group.objective)}</span></div>
          </article>`)
        .join('');
    }

    // Interactive map (optional on the page).
    const mapEl = document.getElementById('incident-map');
    if (!mapEl || !window.L) return;

    const uniqueGroups = [...new Set(incidents.map((i) => i.group_name))].sort();
    const uniqueRegions = [...new Set(incidents.map((i) => i.region))].sort();
    if (groupFilter) {
      uniqueGroups.forEach((g) => groupFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`));
    }
    if (regionFilter) {
      uniqueRegions.forEach((r) => regionFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`));
    }

    const map = L.map('incident-map', { zoomControl: true, worldCopyJump: true }).setView([20, 10], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markers = [];
    function renderVisible() {
      const selectedGroup = groupFilter ? groupFilter.value : 'all';
      const selectedRegion = regionFilter ? regionFilter.value : 'all';
      const filtered = incidents.filter((item) => {
        const groupMatch = selectedGroup === 'all' || item.group_name === selectedGroup;
        const regionMatch = selectedRegion === 'all' || item.region === selectedRegion;
        return groupMatch && regionMatch;
      });

      markers.forEach((m) => map.removeLayer(m));
      markers.length = 0;

      if (resultsContainer) {
        resultsContainer.innerHTML = filtered.length
          ? filtered.map((item) => `
              <article class="map-result-item">
                <h4><a href="attack.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a></h4>
                <p>${escapeHtml(item.summary)}</p>
                <div class="mini-meta">
                  <span>${escapeHtml(item.group_name)}</span><span>•</span><span>${formatDate(item.date)}</span>
                </div>
              </article>`).join('')
          : '<p class="empty-state">No incidents match the current filters.</p>';
      }

      filtered.forEach((item) => {
        if (!item.coordinates) return;
        const marker = L.marker([item.coordinates.lat, item.coordinates.lng])
          .addTo(map)
          .bindPopup(`<strong>${escapeHtml(item.title)}</strong><br>${escapeHtml(item.group_name)}<br><a href="attack.html?id=${encodeURIComponent(item.id)}">Open case file</a>`);
        markers.push(marker);
      });
    }

    if (groupFilter) groupFilter.addEventListener('change', renderVisible);
    if (regionFilter) regionFilter.addEventListener('change', renderVisible);
    renderVisible();
  } catch (error) {
    console.error(error);
  }
})();
