(async function initPostDetail() {
  try {
    const { posts } = await loadDataset();
    const postId = getQueryParam('id');
    const post = posts.find(item => item.id === postId) || posts[0];

    if (!post) {
      document.getElementById('post-title').textContent = 'Post not found';
      return;
    }

    document.title = `${post.title} · Cyber Footprints`;
    document.getElementById('post-breadcrumb').textContent = post.title;
    document.getElementById('post-category').textContent = post.category || 'Note';
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-summary').textContent = post.summary || post.excerpt || '';
    document.getElementById('post-date').textContent = formatDate(post.date);

    const content = document.getElementById('post-content');
    content.innerHTML = (post.content || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('');

    const tags = document.getElementById('post-tags');
    tags.innerHTML = (post.tags || []).map(tag => `<li>${escapeHtml(tag)}</li>`).join('');
  } catch (error) {
    console.error(error);
  }
})();
