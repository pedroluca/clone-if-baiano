const menu = document.getElementById('cursos')
const nav = document.getElementById('nav-cursos')

menu.addEventListener('mouseenter', function() {
  menu.classList.add('active')
})

menu.addEventListener('mouseleave', function() {
  menu.classList.remove('active')
})