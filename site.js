document.querySelectorAll('.mobile-nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = link.closest('details');
    if (menu) menu.removeAttribute('open');
  });
});
