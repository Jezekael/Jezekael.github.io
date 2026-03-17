(async function initPostsPage() {
  try {
    const { posts } = await loadDataset();
    const container = document.getElementById('post-list');
    container.innerHTML = [...posts]
      .sort((a, b) => compareDates(b.date, a.date))
      .map(postCardMarkup)
      .join('');
  } catch (error) {
    console.error(error);
  }
})();
