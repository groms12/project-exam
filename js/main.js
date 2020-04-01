$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            bulletClass:'swiper__pagination__img',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

});