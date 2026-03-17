(async function initAttacks() {
  try {
    const { incidents } = await loadDataset();
    const list = document.getElementById('attack-list');
    const searchInput = document.getElementById('attack-search');
    const groupFilter = document.getElementById('attack-group-filter');
    const sortSelect = document.getElementById('attack-sort');

    [...new Set(incidents.map(item => item.group_name))].sort().forEach(group => {
      groupFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(group)}">${escapeHtml(group)}</option>`);
    });

    function render() {
      const search = searchInput.value.trim().toLowerCase();
      const group = groupFilter.value;
      const sort = sortSelect.value;

      const filtered = incidents.filter(item => {
        const haystack = [
          item.title,
          item.summary,
          item.description,
          item.target,
          item.group_name,
          ...(item.techniques || []),
          ...(item.tags || []),
        ].join(' ').toLowerCase();

        const groupMatch = group === 'all' || item.group_name === group;
        const searchMatch = !search || haystack.includes(search);
        return groupMatch && searchMatch;
      });

      filtered.sort((a, b) => {
        if (sort === 'date-asc') return compareDates(a.date, b.date);
        if (sort === 'name-asc') return a.title.localeCompare(b.title);
        return compareDates(b.date, a.date);
      });

      list.innerHTML = filtered.length
        ? filtered.map(cardMarkup).join('')
        : '<p class="empty-state">No incidents match the current filters.</p>';
    }

    [searchInput, groupFilter, sortSelect].forEach(element => element.addEventListener('input', render));
    groupFilter.addEventListener('change', render);
    sortSelect.addEventListener('change', render);
    render();
  } catch (error) {
    console.error(error);
  }
})();
