let menu = document.querySelector('.uil-bars')
let navbar = document.querySelector('.menu')
let btns = document.querySelector('.botoes')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('uil-multiply')
    navbar.classList.toggle('active-nav')
    btns.classList.toggle('active-btn')
})