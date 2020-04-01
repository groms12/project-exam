$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container-s1', {
        loop: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            bulletClass:'swiper__pagination__img',
          },
    });

    var mySwiper = new Swiper ('.swiper-container-s2', {
        loop: true,
        preloadImages: false,
        slidesPerView: 5,
        spaceBetween: 4,
          navigation: {
            nextEl: '.swiper-button-next-btn',
            prevEl: '.swiper-button-prev-btn',
          },
    });

    $(document).scroll(function(){  //функция прокрутки страницы наверх
        if($(document).scrollTop() > 70) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });
    
    // плавная прокрутка кнопки наверх
    $('.scroll-top').click(function(){
        $('html').animate({scrollTop: 0}, 1000);
        $('body').animate({scrollTop: 0}, 1000);
        // console.log($('body').scrollTop);
        return false;
    });

});