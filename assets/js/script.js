const burger = document.querySelector('.burger-menu');
const menuWrap = document.querySelector('.menu-wrap');

burger.addEventListener('click', () => {
    burger.classList.toggle('bar-change');
    menuWrap.classList.toggle('menu-change');
});

$('.menu-list').click(function () {
    $('.burger-menu').removeClass('bar-change');
    $('.menu-wrap').removeClass('menu-change');
});

$(document).ready(function () {
    $(window).scroll(function () {
        $(".header-nav").toggleClass("header-shrink", $(this).scrollTop() > 30)
        $("#logo").toggleClass("logo-shrink", $(this).scrollTop() > 30)
    });
});

document.querySelectorAll('.menu-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.scroll-to').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelector('.logo-scroll').addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});


const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();