let burger = document.getElementById('burger');
let nav = document.getElementById('nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
})