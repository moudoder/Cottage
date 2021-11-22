$(document).ready(function () {
  new WOW().init();
  let wdth_body = window.innerHeight;

  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      let div = $(".menu-left"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.menu-left').removeClass('menu-left-active');
      }
    });
  });

  $('.burger-button').on('click', function() {
    $('.menu-left').addClass('menu-left-active');
  })
  $('.menu-left__close').on('click', function() {
   $('.menu-left').removeClass('menu-left-active');
  })



  if ($(window).width() < 720) {

    $(".slider_item").attr('style', 'height: ' + wdth_body +'px !important;')
    $(".maps .maps-img").attr('style', 'height: ' + wdth_body +'px !important;')
    
    


  }

  $('.contacts-form-1').submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {

        $(this).find("input").val("");
        $('.contacts-form-1').trigger("reset");
      });
      return false;
    })

  $('.contacts-form-2').submit(function() {
      $.ajax({
        type: "POST",
        url: "mail_catalog.php",
        data: $(this).serialize()
      }).done(function() {

        $(this).find("input").val("");
        $('.contacts-form-2').trigger("reset");
      });
      return false;
    })

  

  

  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    $('.modal-menu').removeClass('modal-menu-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });


  $('.homes-btn__more_1').on("click", function () {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window__1').addClass('modal-window-active');
    return false;
  });
  $('.homes-btn__more_2').on("click", function () {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window__2').addClass('modal-window-active');
    return false;
  });
  $('.homes-btn__more_3').on("click", function () {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window__3').addClass('modal-window-active');
    return false;
  });
  $('.modal-window_close').on("click", function () {
    $('.dark-window').removeClass('dark-window-active');
    $('.modal-window').removeClass('modal-window-active');
  });
  $('.dark-window').on("click", function () {
    $('.dark-window').removeClass('dark-window-active');
    $('.modal-window').removeClass('modal-window-active');
  });

  var owl = $('.homes-slider');
  owl.owlCarousel({
    autoWidth:true,
    loop:true,
    center:true,
    transitionStyle : "fade",
    smartSpeed: 1000,
    dragEndSpeed: 1000,
  });
  // Go to the next item
  $('.hms-arrow__next').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.hms-arrow__prev').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })
 
  if ($(window).width() < 1025 && $(window).width() > 761) {
     $('.banking, .adress').wrapAll('<div class="slider_item slider_item__wrap">');

     $('.header, .homes').wrapAll('<div class="slider_item slider_item__hdr">');

     $('.maps, .contacts').wrapAll('<div class="slider_item slider_item__wrap2">');
  }

  $('.slider-page').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    vertical: true,
    verticalSwiping: false,
    adaptiveHeight: true,
    speed: 1000,
    cssEase: 'ease',
    responsive: [
        {
          breakpoint: 720,
          settings: {
            swipe: true,
            verticalSwiping: true,
          }
        }
      ]
   });

  $('.modal-menu__item_1').on('click', function() {
    $('.slider-page').slick('slickGoTo', 0);
    $('.menu-left').removeClass('menu-left-active');
    return false;
  })

  $('.arrow-top__link').on('click', function() {
    $('.slider-page').slick('slickGoTo', 0);
    $('.menu-left').removeClass('menu-left-active');
    return false;
  })
  
  $('.modal-menu__item_2').on('click', function() {
    $('.slider-page').slick('slickGoTo', 1);
    $('.menu-left').removeClass('menu-left-active');
    return false;
  })
  $('.modal-menu__item_3').on('click', function() {
    $('.slider-page').slick('slickGoTo', 2);
    $('.menu-left').removeClass('menu-left-active');
    return false;
  })
  $('.modal-menu__item_4').on('click', function() {
    $('.slider-page').slick('slickGoTo', 15);
    $('.menu-left').removeClass('menu-left-active');
    return false;
  })
  $('.modal-menu__item_5').on('click', function() {
    $('.slider-page').slick('slickGoTo', 17);
    $('.menu-left').removeClass('menu-left-active');
    return false;
  })
  $('.slider-page').on('init', function(e, slick) {
    var $firstEl = $('.slider_item:first-child').find('[data-animation]');
    doAnimation($firstEl);    
  });
  $('.slider-page').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $animationEl = $('.slider_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimation($animationEl);    
  });

  function doAnimation(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }

  let services = $('.modal-window-slider');
  for (var i = services.length - 1; i >= 0; i--) {
    let par_ser = $(services[i]).parent('.modal-window');
    par_ser = $(par_ser).children('.modal-wrapper');
    par_ser = $(par_ser).children('.homes-arrows');


    let arrow_r = $(par_ser).children('.modal__arrow_prev')
    let arrow_l = $(par_ser).children('.modal__arrow_next')
    console.log(par_ser)
    $(services[i]).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      prevArrow: arrow_r,
      nextArrow: arrow_l,
     });
  }


  
  $('.modal-window-subslider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    asNavFor: '.modal-window-slider',
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
   });
  

 
  
  $('.contacts-block').on('click', function() {
    $(this).toggleClass('contacts-block__active');
  })


  

  let mous_dwn_counter = 0;
  setInterval(function(){ 
      mous_dwn_counter = 1;
  }, 500);

  let mous_dwn_counter2 = 0;
  setInterval(function(){ 
      mous_dwn_counter2 = 1;
  }, 500);

  
  $(window).on('scroll', function() {
    
  }); 
  
  

  function doScroll(e) {
        // positive deltas are top and left
        // down and right are negative

        // horizontal offset    e.deltaX
        // vertical offset      e.deltaY

        

        

        if (e.deltaY > 10) {
          if (mous_dwn_counter == 1) {
            $('.slider-page').slick('slickNext');
            mous_dwn_counter = 0;
          }
          
        }
        if (e.deltaY < -10) {
          if (mous_dwn_counter2 == 1) {
            $('.slider-page').slick('slickPrev');
            mous_dwn_counter2 = 0;
          }
          
        }
    }

    window.addEventListener("wheel", doScroll, false);

})