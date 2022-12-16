$(function () {

  const menu = document.querySelector('.menu')
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY

    if (scrollDistance >= 1)
      menu.classList.add('menu--fixed')
    else
      menu.classList.remove('menu--fixed')
  })

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $(".header a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(".footer a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });



});

var mixer = mixitup('.works__gallery');

Fancybox.show([
  {
    src: "https://youtu.be/skl6N3zGv-s",
    thumb: "http://i3.ytimg.com/vi/z2X2HaTvkl8/hqdefault.jpg",
  },

]);




