
const ham = document.querySelector('.showMenu');
const menu =document.querySelector('.phone_navbar_link');
const close = document.querySelector('.cross_btn');

ham.addEventListener('click',function (){menu.classList.toggle('show')});
close.addEventListener('click',function (){menu.classList.remove('show')});


