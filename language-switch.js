// Keep the reader at the equivalent section when switching languages.
document.querySelectorAll('[data-language-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = new URL(link.href, window.location.href);
    target.hash = window.location.hash;
    link.href = target.href;
  });
});
