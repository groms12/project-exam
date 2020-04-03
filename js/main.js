$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container-s1', {
        loop: true,
        preloadImages: false,
        initialSlide: 1,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass:'swiper__pagination__img',
            bulletActiveClass: 'swiper__pagination__img--active',
          },
    });

    var mySwiper = new Swiper ('.swiper-container-s2', {
        loop: true,
        preloadImages: false,
        slidesPerView: 5,
        spaceBetween: 12,
          navigation: {
            nextEl: '.swiper-button-next-btn',
            prevEl: '.swiper-button-prev-btn',
          },
    });

    var mySwiper = new Swiper ('.swiper-container-s3', {
        loop: true,
        preloadImages: false,initialSlide: 1,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass:'swiper__pagination__img',            
            bulletActiveClass: 'swiper__pagination__img--active',
          },
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

    var bg = document.getElementById('btn');

    document.getElementById('check').addEventListener("mouseover", function(){
            bg.style.background = "#ffd11a";
            bg.style.color = 'black'
            this.addEventListener("mouseout", function(){
                bg.style.color = "#ffd11a";
                bg.style.background = "";
            });
        });
        document.getElementById('btn').addEventListener("mouseover", function(){
            bg.style.background = "#ffd11a";
            bg.style.color = 'black'
            this.addEventListener("mouseout", function(){
                bg.style.color = "#ffd11a";
                bg.style.background = "";
        });
    });

    $("#check1").click(function(){
        $(".label1").toggleClass("section__cards__text__radio--active");
        $(".label2").removeClass("section__cards__text__radio--active");
        $(".label3").removeClass("section__cards__text__radio--active");
        $(".label4").removeClass("section__cards__text__radio--active");
        $(".label5").removeClass("section__cards__text__radio--active");
        return false;
    });
    $("#check2").click(function(){
        $(".label1").removeClass("section__cards__text__radio--active");
        $(".label2").toggleClass("section__cards__text__radio--active");
        $(".label3").removeClass("section__cards__text__radio--active");
        $(".label4").removeClass("section__cards__text__radio--active");
        $(".label5").removeClass("section__cards__text__radio--active");
        return false;
    });
    $("#check3").click(function(){
        $(".label1").removeClass("section__cards__text__radio--active");
        $(".label2").removeClass("section__cards__text__radio--active");
        $(".label3").toggleClass("section__cards__text__radio--active");
        $(".label4").removeClass("section__cards__text__radio--active");
        $(".label5").removeClass("section__cards__text__radio--active");
        return false;
    });
    $("#check4").click(function(){
        $(".label1").removeClass("section__cards__text__radio--active");
        $(".label2").removeClass("section__cards__text__radio--active");
        $(".label3").removeClass("section__cards__text__radio--active");
        $(".label4").toggleClass("section__cards__text__radio--active");
        $(".label5").removeClass("section__cards__text__radio--active");
        return false;
    });
    $("#check5").click(function(){
        $(".label1").removeClass("section__cards__text__radio--active");
        $(".label2").removeClass("section__cards__text__radio--active");
        $(".label3").removeClass("section__cards__text__radio--active");
        $(".label4").removeClass("section__cards__text__radio--active");
        $(".label5").toggleClass("section__cards__text__radio--active");
        return false;
    });

});