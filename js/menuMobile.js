const buttonMobile = document.getElementById('mobile-btn');
const hamburguer = document.getElementById('hamburguer');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menuMobile = document.getElementById('menu');
  menuMobile.classList.toggle('active');
  hamburguer.classList.toggle('active');
}

buttonMobile.addEventListener('click', toggleMenu);
buttonMobile.addEventListener('touchstart', toggleMenu);

document.addEventListener('click', function(event) {
  const menuMobile = document.getElementById('menu');
  const isClickInsideMenu = menuMobile.contains(event.target);
  const isClickInsideButton = buttonMobile.contains(event.target);
  if (!isClickInsideMenu && !isClickInsideButton && menuMobile.classList.contains('active')) {
    menuMobile.classList.remove('active');
    hamburguer.classList.remove('active');
  }
});