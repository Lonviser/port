const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

humburger.addEventListener('click', () =>{
    menu.classList.add('active');
})

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('active');
})

const hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});