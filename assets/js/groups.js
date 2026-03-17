(async function initGroups() {
  try {
    const { groups, incidents } = await loadDataset();
    const list = document.getElementById('group-list');

    list.innerHTML = groups.map(group => {
      const linkedCount = incidents.filter(item => item.group === group.id).length;
      return `
        <article class="card">
          <div class="card-header">
            <div>
              <span class="badge">${escapeHtml(group.country)}</span>
              <h3><a href="group.html?id=${encodeURIComponent(group.id)}">${escapeHtml(group.name)}</a></h3>
            </div>
            <span>${linkedCount} incident${linkedCount > 1 ? 's' : ''}</span>
          </div>
          <p>${escapeHtml(group.summary)}</p>
          <div class="mini-meta">
            <span>${escapeHtml(group.objective)}</span>
            <span>•</span>
            <span>${escapeHtml(group.status)}</span>
          </div>
        </article>
      `;
    }).join('');
  } catch (error) {
    console.error(error);
  }
})();
