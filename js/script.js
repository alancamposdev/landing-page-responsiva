// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('navbar__toggle--active');
  navLinks.classList.toggle('navbar__links--open');
});

// Close menu when a link is clicked (better mobile UX)
const navLinkItems = navLinks.querySelectorAll('.navbar__link');

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('navbar__toggle--active');
    navLinks.classList.remove('navbar__links--open');
  });
});

