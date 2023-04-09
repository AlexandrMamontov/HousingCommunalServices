// search
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('search-form-open').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('form__show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('form__show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})
