/* Renders the Home "latest content" grid.
   Built entirely from embedded data (window.CYBER_FOOTPRINTS_DATA) plus a small
   static list of feature posts/projects, so it works offline (file://) without
   any fetch(). Relies on formatDate/escapeHtml from common.js. */
(function initContentIndex() {
  const grid = document.getElementById('latest');
  if (!grid) return;
  const N = 6;

  const data = window.CYBER_FOOTPRINTS_DATA || {};
  const features = data.features || [];
  const posts = data.posts || [];
  const notes = posts.map((p) => ({
    type: 'note',
    title: p.title,
    slug: `post.html?id=${encodeURIComponent(p.id)}`,
    date: p.date,
    summary: p.excerpt || p.summary || '',
    tags: p.tags || [],
  }));

  const items = [...features, ...notes].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  grid.innerHTML = items
    .slice(0, N)
    .map((i) => `
      <a class="card" href="${escapeHtml(i.slug)}">
        <span class="pill pill-${escapeHtml(i.type)}">${escapeHtml(i.type)}</span>
        <h3>${escapeHtml(i.title)}</h3>
        <p class="out">${escapeHtml(i.summary)}</p>
        <div class="mini-meta">
          <time datetime="${escapeHtml(i.date)}">${formatDate(i.date)}</time>
          ${(i.tags || []).slice(0, 3).map((t) => `<span>#${escapeHtml(t)}</span>`).join('')}
        </div>
      </a>`)
    .join('');
})();
