/* World Wide Threats & Actors (WWT&A)
   Evolution of the original incident map. Reuses the existing incidents/groups
   dataset to render:
     1. per-sponsor-country attack counts,
     2. a Leaflet marker map coloured by suspected sponsor,
     3. a searchable, sortable actor "database" table.
   Ships no extra heavy geo asset. */
(async function initWwta() {
  try {
    const { incidents, groups } = await loadDataset();
    const groupById = Object.fromEntries(groups.map((g) => [g.id, g]));

    // Stable colour per suspected sponsor country.
    const palette = ['#39ff7a', '#ff5f56', '#ffbd2e', '#7ab8ff', '#c78bff', '#ff8ac0', '#6ee7d6'];
    const countries = [...new Set(groups.map((g) => g.country).filter(Boolean))].sort();
    const colorOf = {};
    countries.forEach((c, i) => { colorOf[c] = palette[i % palette.length]; });

    // ---- Per-country counts -------------------------------------------------
    const counts = {};
    incidents.forEach((inc) => {
      const g = groupById[inc.group];
      const country = (g && g.country) || 'Unknown';
      counts[country] = (counts[country] || 0) + 1;
    });
    const statsEl = document.getElementById('wwta-stats');
    if (statsEl) {
      statsEl.innerHTML = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([country, n]) => `
          <div class="country-stat" style="border-left:3px solid ${colorOf[country] || '#8a8a8a'}">
            <strong>${n}</strong>
            <span>${escapeHtml(country)}</span>
          </div>`)
        .join('');
    }

    // ---- Leaflet marker map -------------------------------------------------
    const mapEl = document.getElementById('wwta-map');
    if (mapEl && window.L) {
      const map = L.map('wwta-map', { worldCopyJump: true }).setView([25, 10], 2);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      incidents.forEach((inc) => {
        if (!inc.coordinates) return;
        const g = groupById[inc.group];
        const country = (g && g.country) || 'Unknown';
        L.circleMarker([inc.coordinates.lat, inc.coordinates.lng], {
          radius: 8,
          color: colorOf[country] || '#8a8a8a',
          fillColor: colorOf[country] || '#8a8a8a',
          fillOpacity: 0.65,
          weight: 2,
        })
          .addTo(map)
          .bindPopup(`<strong>${escapeHtml(inc.title)}</strong><br>${escapeHtml(inc.group_name)} · ${escapeHtml(country)}<br><a href="${escapeHtml(inc.url)}">Open case file</a>`);
      });
    }

    // ---- Searchable actor table --------------------------------------------
    const tbody = document.getElementById('wwta-tbody');
    const search = document.getElementById('wwta-search');
    const sponsorFilter = document.getElementById('wwta-sponsor');

    const rows = groups.map((g) => ({
      ...g,
      incident_count: incidents.filter((i) => i.group === g.id).length,
    }));

    if (sponsorFilter) {
      countries.forEach((c) => {
        sponsorFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`);
      });
    }

    function renderTable() {
      if (!tbody) return;
      const q = (search ? search.value : '').trim().toLowerCase();
      const sponsor = sponsorFilter ? sponsorFilter.value : 'all';
      const filtered = rows.filter((r) => {
        const hay = [r.name, r.country, r.objective, ...(r.aliases || []), ...(r.focus_areas || [])]
          .join(' ').toLowerCase();
        const matchQ = !q || hay.includes(q);
        const matchSponsor = sponsor === 'all' || r.country === sponsor;
        return matchQ && matchSponsor;
      }).sort((a, b) => b.incident_count - a.incident_count);

      tbody.innerHTML = filtered.length
        ? filtered.map((r) => `
          <tr>
            <td><a class="text-link" href="${escapeHtml(r.url)}">${escapeHtml(r.name)}</a></td>
            <td>${(r.aliases || []).map(escapeHtml).join(', ') || 'n/a'}</td>
            <td><span style="color:${colorOf[r.country] || '#8a8a8a'}">${escapeHtml(r.country || 'Unknown')}</span></td>
            <td>${escapeHtml(r.objective || 'n/a')}</td>
            <td>${(r.focus_areas || []).slice(0, 3).map(escapeHtml).join(', ') || 'n/a'}</td>
            <td style="text-align:center;font-family:var(--mono)">${r.incident_count}</td>
          </tr>`).join('')
        : '<tr><td colspan="6" class="empty-state">No actors match the current filters.</td></tr>';
    }

    if (search) search.addEventListener('input', renderTable);
    if (sponsorFilter) sponsorFilter.addEventListener('change', renderTable);
    renderTable();
  } catch (error) {
    console.error(error);
  }
})();
