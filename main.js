const openMenu = document.querySelector('.menu-bars');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('#mobile-menu');

function show() {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
}

function close() {
  mobileMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);