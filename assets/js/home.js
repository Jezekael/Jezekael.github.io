(async function initHome() {
  try {
    const { incidents, groups, posts } = await loadDataset();

    document.getElementById('hero-incident-count').textContent = incidents.length;
    document.getElementById('hero-group-count').textContent = groups.length;
    document.getElementById('hero-post-count').textContent = posts.length;

    const groupFilter = document.getElementById('group-filter');
    const regionFilter = document.getElementById('region-filter');
    const resultsContainer = document.getElementById('map-results');
    const featuredContainer = document.getElementById('featured-incidents');
    const featuredGroupsContainer = document.getElementById('featured-groups');
    const latestPostsContainer = document.getElementById('latest-posts');

    const uniqueGroups = [...new Set(incidents.map(item => item.group_name))].sort();
    const uniqueRegions = [...new Set(incidents.map(item => item.region))].sort();

    uniqueGroups.forEach(group => {
      groupFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(group)}">${escapeHtml(group)}</option>`);
    });

    uniqueRegions.forEach(region => {
      regionFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(region)}">${escapeHtml(region)}</option>`);
    });

    const map = L.map('incident-map', {
      zoomControl: true,
      worldCopyJump: true,
    }).setView([20, 10], 2);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const markers = [];

    function renderVisible() {
      const selectedGroup = groupFilter.value;
      const selectedRegion = regionFilter.value;

      const filtered = incidents.filter(item => {
        const groupMatch = selectedGroup === 'all' || item.group_name === selectedGroup;
        const regionMatch = selectedRegion === 'all' || item.region === selectedRegion;
        return groupMatch && regionMatch;
      });

      markers.forEach(marker => map.removeLayer(marker));
      markers.length = 0;

      resultsContainer.innerHTML = filtered.length
        ? filtered.map(item => `
            <article class="map-result-item">
              <h4><a href="attack.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a></h4>
              <p>${escapeHtml(item.summary)}</p>
              <div class="mini-meta">
                <span>${escapeHtml(item.group_name)}</span>
                <span>•</span>
                <span>${formatDate(item.date)}</span>
              </div>
            </article>`).join('')
        : '<p class="empty-state">No incidents match the current filters.</p>';

      filtered.forEach(item => {
        const marker = L.marker([item.coordinates.lat, item.coordinates.lng])
          .addTo(map)
          .bindPopup(`
            <strong>${escapeHtml(item.title)}</strong><br>
            ${escapeHtml(item.group_name)}<br>
            <a href="attack.html?id=${encodeURIComponent(item.id)}">Open case file</a>
          `);
        markers.push(marker);
      });
    }

    groupFilter.addEventListener('change', renderVisible);
    regionFilter.addEventListener('change', renderVisible);
    renderVisible();

    featuredContainer.innerHTML = [...incidents]
      .sort((a, b) => compareDates(b.date, a.date))
      .slice(0, 6)
      .map(cardMarkup)
      .join('');

    featuredGroupsContainer.innerHTML = [...groups]
      .slice(0, 6)
      .map(group => `
        <article class="card">
          <div class="card-header">
            <div>
              <span class="badge">${escapeHtml(group.country || 'Unknown')}</span>
              <h3><a href="group.html?id=${encodeURIComponent(group.id)}">${escapeHtml(group.name)}</a></h3>
            </div>
          </div>
          <p>${escapeHtml(group.summary)}</p>
          <div class="mini-meta">
            <span>${escapeHtml(group.objective)}</span>
          </div>
        </article>
      `).join('');

    latestPostsContainer.innerHTML = [...posts]
      .sort((a, b) => compareDates(b.date, a.date))
      .slice(0, 3)
      .map(postCardMarkup)
      .join('');
  } catch (error) {
    console.error(error);
  }
})();
