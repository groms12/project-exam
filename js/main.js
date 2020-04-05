$(document).ready(function () {
    new WOW().init();

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
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            740: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 20
            }
          },
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
            nextEl: '.swiper-button-next-btn__galery',
            prevEl: '.swiper-button-prev-btn__galery',
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

    $('.section__free__form').validate({
        errorClass: "invalid",
        errorElement: "span",
        rules: {
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          policyheckbox: {
            required: true,
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            policyheckbox: {
                required: "Обязательно согласие",
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                }
            });
          }
      });
      $('.section__cards__text').validate({
        errorClass: "invalid",
        errorElement: "p",
        rules: {
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          policyCheckbox: {
            required: true
          },
        //   cardPeriod: {
        //     required: true
        //   },
          fitnessClub: {
            required: true
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            policyCheckbox: {
                required: "Обязательно согласие",
            },
            // cardPeriod: {
            //     required: "Выберете срок действия карты"
            // },
            fitnessClub: {
                required: "Выберете фитнес-клуб"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                }
            });
          }
      });
      $('.modal__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          policyCheckbox: {
            required: true,
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            policyCheckbox: {
                required: "Обязательно согласие",
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                }
            });
          }
      });
      $('.modal__form_1').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: {
                required: true,
                minlength: 18,
            },
            policyCheckbox: {
                required: true,
            }
            },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            policyCheckbox: {
                required: "Обязательно согласие",
            }
            },
            submitHandler: function(form) {
                $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                    }
                });
            }
        });
      
      var spinner_1 = $('.ymap-container-1').children('.loader');
      var check_if_load_1 = 0;
      var myMapTemp_1, myPlacemarkTemp_1;    
      
      function init_1 () {
          var myMapTemp_1 = new ymaps.Map("map-yandex-1", {
          center: [55.710687, 37.675100],
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl']
      }, {
          searchControlProvider: 'yandex#search'
      });
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );
      var myPlacemarkTemp_1 = new ymaps.Placemark([55.710687, 37.675100], {
          balloonContent: "Здесь может быть ваш адрес",
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map.png',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-30, -70],
      });
          
          myMapTemp_1.geoObjects.add(myPlacemarkTemp_1);       
          myMapTemp_1.behaviors.disable('scrollZoom');
          
          //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
          var layer_1 = myMapTemp_1.layers.get(0).get(0);
          
          //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
          waitForTilesLoad_1(layer_1).then(function() {
              //Скрываем
              spinner_1.removeClass('is-active');
          });
      }
      
      function waitForTilesLoad_1(layer_1) {
          return new ymaps.vow.Promise(function (resolve, reject) {
              var tc_1 = getTileContainer_1(layer_1), readyAll = true;
              tc_1.tiles.each(function (tile, number) {
                  if (!tile.isReady()) {
                      readyAll = false;
                  }
              });
              if (readyAll) {
                  resolve();
              } else {
                  tc_1.events.once("ready", function() {
                      resolve();
                  });
              }
          });
      }
      
      function getTileContainer_1(layer_1) {
          for (var k in layer_1) {
              if (layer_1.hasOwnProperty(k)) {
                  if (
                      layer_1[k] instanceof ymaps.layer_1.tileContainer.CanvasContainer
                      || layer_1[k] instanceof ymaps.layer_1.tileContainer.DomContainer
                      ) {
                          return layer_1[k];
                      }
                  }
              }
              return null;
          }
          
          function loadScript_1(url, callback){
              
              var script_1 = document.createElement("script");
              
              if (script_1.readyState){  //IE
                  script_1.onreadystatechange = function(){
                      if (script_1.readyState == "loaded" ||
                      script_1.readyState == "complete"){
                          script_1.onreadystatechange = null;
                          callback();
                      }
                  };
              } else {  //Другие браузеры
                  script_1.onload = function(){
                      callback();
                  };
              }
              
              script_1.src = url;
              document.getElementsByTagName("head")[0].appendChild(script_1);
          }
          
          var ymap_1 = function() {
              $('.ymap-container-1').mouseenter(function(){
                  if (check_if_load_1 == 0) {
                      check_if_load_1 = 1;
                      
                      spinner_1.addClass('is-active');
                      
                      loadScript_1("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
                          ymaps.load(init_1);
                      });         
                      
                  }
              }
              );  
          }
          
          $(function() {            
              //Map Yandex
              ymap_1();            
          });
      // клуб Щелково
      var spinner_2 = $('.ymap-container-2').children('.loader');
      var check_if_load_2 = 0;
      var myMapTemp_2, myPlacemarkTemp_2;    
      
      function init_2 () {
          var myMapTemp_2 = new ymaps.Map("map-yandex-2", {
          center: [55.913167, 37.994559],
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl']
      }, {
          searchControlProvider: 'yandex#search'
      });
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );
      var myPlacemarkTemp_2 = new ymaps.Placemark([55.913167, 37.994559], {
          balloonContent: "Здесь может быть ваш адрес",
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map.png',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-30, 70],
      });
          
          myMapTemp_2.geoObjects.add(myPlacemarkTemp_2);       
          myMapTemp_2.behaviors.disable('scrollZoom');
          
          //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
          var layer_2 = myMapTemp_2.layers.get(0).get(0);
          
          //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
          waitForTilesLoad_2(layer_2).then(function() {
              //Скрываем
              spinner_2.removeClass('is-active');
          });
      }
      
      function waitForTilesLoad_2(layer_2) {
          return new ymaps.vow.Promise(function (resolve, reject) {
              var tc_2 = getTileContainer_2(layer_2), readyAll = true;
              tc_2.tiles.each(function (tile, number) {
                  if (!tile.isReady()) {
                      readyAll = false;
                  }
              });
              if (readyAll) {
                  resolve();
              } else {
                  tc_2.events.once("ready", function() {
                      resolve();
                  });
              }
          });
      }
      
      function getTileContainer_2(layer_2) {
          for (var k in layer_2) {
              if (layer_2.hasOwnProperty(k)) {
                  if (
                      layer_2[k] instanceof ymaps.layer_2.tileContainer.CanvasContainer
                      || layer_2[k] instanceof ymaps.layer_2.tileContainer.DomContainer
                      ) {
                          return layer_2[k];
                      }
                  }
              }
              return null;
          }
          
          function loadScript_2(url, callback){
              
              var script_2 = document.createElement("script");
              
              if (script_2.readyState){  //IE
                  script_2.onreadystatechange = function(){
                      if (script_2.readyState == "loaded" ||
                      script_2.readyState == "complete"){
                          script_2.onreadystatechange = null;
                          callback();
                      }
                  };
              } else {  //Другие браузеры
                  script_2.onload = function(){
                      callback();
                  };
              }
              
              script_2.src = url;
              document.getElementsByTagName("head")[0].appendChild(script_2);
          }
          
          var ymap_2 = function() {
              $('.ymap-container-2').mouseenter(function(){
                  if (check_if_load_2 == 0) {
                      check_if_load_2 = 1;
                      
                      spinner_2.addClass('is-active');
                      
                      loadScript_2("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
                          ymaps.load(init_2);
                      });         
                      
                  }
              }
              );  
          }
          
          $(function() {            
              //Map Yandex
              ymap_2();            
      });

      $('[type=tel]').mask('+7 (000) 000-00-00');

      var menuButton = document.querySelector('.menu-button');
      var menu = document.querySelector('.header__menu__nonactive');
      
      menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('menu-button--active');
        menu.classList.toggle('header__menu__nonactive--active');
    });

      // клуб Мозаика


    var modalCall = $('.modal--call');
    var modalFree = $('.modal--free');
    var modalBtn = $('[data-toggle=modal-call]');
    var modalBtn2 = $('[data-toggle=modal-free]');
    var closeBtn = $('.modal__close__call');
    var closeBtn2 = $('.modal__close__free');

    modalBtn.on('click', function () {
        modalCall.toggleClass('modal--call--visible');
    });
    closeBtn.on('click', function () {
        modalCall.toggleClass('modal--call--visible');
    });

    modalBtn2.on('click', function () {
        modalFree.toggleClass('modal--free--visible');
    });
    closeBtn2.on('click', function () {
        modalFree.toggleClass('modal--free--visible');
    });

    
});