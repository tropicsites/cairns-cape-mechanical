const menu = document.querySelector('.mobile-nav');

if (menu) {
  // Close the mobile menu after choosing a link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.removeAttribute('open'));
  });

  // ...when tapping outside it
  document.addEventListener('click', (event) => {
    if (menu.hasAttribute('open') && !menu.contains(event.target)) menu.removeAttribute('open');
  });

  // ...and on Escape (returning focus to the Menu button)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.hasAttribute('open')) {
      menu.removeAttribute('open');
      menu.querySelector('summary').focus();
    }
  });
}
