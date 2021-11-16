$(document).ready(function () {
  new WOW().init();
  
  

  $('.burger-button').on('click', function() {
    let parent_burger = $(this).parent('.header-nav-left');
    $(parent_burger).addClass('header-nav-active');
  })
  $('.modal-menu__img').on('click', function() {
    let parent_burger = $(this).parent('.modal-menu');
    parent_burger = $(parent_burger).parent('.header-nav-left');
    $(parent_burger).removeClass('header-nav-active');
  })

  

  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    $('.modal-menu').removeClass('modal-menu-active');
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });


  


  $('.homes-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    arrows: true,
    centerMode:true,
    variableWidth: true,
    prevArrow: $('.hms-arrow__prev'),
    nextArrow: $('.hms-arrow__next'),
   });
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
    return false;
  })
  $('.modal-menu__item_2').on('click', function() {
    $('.slider-page').slick('slickGoTo', 1);
    return false;
  })
  $('.modal-menu__item_3').on('click', function() {
    $('.slider-page').slick('slickGoTo', 3);
    return false;
  })
  $('.modal-menu__item_4').on('click', function() {
    $('.slider-page').slick('slickGoTo', 15);
    return false;
  })
  $('.modal-menu__item_5').on('click', function() {
    $('.slider-page').slick('slickGoTo', 17);
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

  $('.modal-window-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: true,
    prevArrow: $('.modal__arrow_prev'),
    nextArrow: $('.modal__arrow_next'),
   });
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


  $('.slider').on('afterChange', function (event, currentSlide) {
       
    });

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