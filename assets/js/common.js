const dataStore = {
  incidents: null,
  groups: null,
  posts: null,
};

const embeddedData = window.CYBER_FOOTPRINTS_DATA || {};

async function fetchJson(path) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
}

async function loadDataset() {
  if (!dataStore.incidents || !dataStore.groups) {
    if (embeddedData.incidents && embeddedData.groups) {
      dataStore.incidents = embeddedData.incidents;
      dataStore.groups = embeddedData.groups;
      dataStore.posts = embeddedData.posts || [];
      return dataStore;
    }

    const [incidents, groups, posts] = await Promise.all([
      fetchJson('data/incidents.json'),
      fetchJson('data/groups.json'),
      fetchJson('data/posts.json').catch(() => []),
    ]);
    dataStore.incidents = incidents;
    dataStore.groups = groups;
    dataStore.posts = posts;
  }
  return dataStore;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

function compareDates(a, b) {
  return new Date(a).getTime() - new Date(b).getTime();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function cardMarkup(incident) {
  return `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${escapeHtml(incident.group_name)}</span>
          <h3><a href="attack.html?id=${encodeURIComponent(incident.id)}">${escapeHtml(incident.title)}</a></h3>
        </div>
        <time datetime="${escapeHtml(incident.date)}">${formatDate(incident.date)}</time>
      </div>
      <p>${escapeHtml(incident.summary)}</p>
      <div class="mini-meta">
        <span>${escapeHtml(incident.region)}</span>
        <span>•</span>
        <span>${escapeHtml(incident.target)}</span>
      </div>
    </article>
  `;
}

function postCardMarkup(post) {
  return `
    <article class="card">
      <div class="card-header">
        <div>
          <span class="badge">${escapeHtml(post.category || 'Note')}</span>
          <h3><a href="post.html?id=${encodeURIComponent(post.id)}">${escapeHtml(post.title)}</a></h3>
        </div>
        <time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
      </div>
      <p>${escapeHtml(post.excerpt || post.summary || '')}</p>
      <div class="mini-meta">
        ${(post.tags || []).slice(0, 3).map(tag => `<span>#${escapeHtml(tag)}</span>`).join('')}
      </div>
    </article>
  `;
}
