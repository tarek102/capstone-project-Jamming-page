/* Variables */

const hamburgerBtn = document.querySelectorAll('.hamburger-menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const closeBtn = document.querySelector('.menu-wrapper img');

/* function */

function openMenu() {
  menuWrapper.classList.add('menu-wrapper-active');
}

function closeMenu() {
  menuWrapper.classList.remove('menu-wrapper-active');
}

/* Events */

hamburgerBtn.forEach((btn) => {
  btn.addEventListener('click', openMenu);
});
closeBtn.addEventListener('click', closeMenu);