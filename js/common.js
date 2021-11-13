$(document).ready(function () {
  new WOW().init();
  



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
    swipe: true,
    arrows: true,
    centerMode:true,
    variableWidth: true,
    prevArrow: $('.hms-arrow__prev'),
    nextArrow: $('.hms-arrow__next'),
    focusOnSelect: true
   });
  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    vertical: true,
   });
  

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



  $( "body" ).on( "swipe", swipeHandler );

      
      function swipeHandler( event ){
         console.log( event );
  }

  let $element = $('.slider');
  let counter = 0;

  var h = document.getElementById('hg-wrap').scrollHeight;
  
  

  $(window).scroll(function() {
    let scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top + $element.height();
   
    if (scroll > offset && counter == 0) {
      $('html').addClass('html-over_2');
      waitPeriod = 500;// waiting time
          setTimeout(function() {
            counter = 1;
            scrl_tr = 0;
            
          }, waitPeriod);
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() == 0 && slide_2 == 1) {
      counter = 1;
      scrl_tr = 0;
      $('html').addClass('html-over_2');
    }
  });
  

  $('.contacts-block').on('click', function() {
    $(this).toggleClass('contacts-block__active');
  })
 let scrl_tr = 0;

  
 alert('Последняя версия')
  var scrollPos = 0;
  $(window).scroll(function(){
     var st = $(this).scrollTop();
     if (st > scrollPos){
       if (counter == 1 && scrl_tr == 0) {
          $('.slider').slick('slickNext');
        }
     } else {
       
     }
     scrollPos = st;
  });
  
  $('.slider').on('afterChange', function (event, slick, currentSlide) {
       if ($('.slider-slide-11').hasClass('slick-current')) {
        $('body').removeClass('body-over');
        $('html').removeClass('html-over_2');
        $('html').addClass('body-top-2');
        $('html, body').animate({scrollTop: 2},1);
        scrl_tr = 1;
        slide_2 = 1;
       }
       if ($('.slider-slide-1').hasClass('slick-current')) {
        $('html').removeClass('body-top-2');
        $('html').removeClass('html-over_2');
        $('body').addClass('body-over');
        let prt_2 = $(document).height() - $(window).height()
        counter = 0;
        scrl_tr = 1;
        let of_sl = $(document).height() - $(window).height()
        of_sl = of_sl - 20;
        slide_2 = 0;
       
        $('html, body').animate({scrollTop: of_sl}, 1);
       
       
        
       }
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

      

      e.preventDefault(); // disable the actual scrolling

      if (e.deltaY > 10) {
        if (counter == 1 && mous_dwn_counter == 1 && scrl_tr == 0) {
           $('.slider').slick('slickNext');
           mous_dwn_counter = 0;
         }
      }
      if (e.deltaY < -10) {
        if (counter == 1 && mous_dwn_counter2 == 1 && scrl_tr == 0) {
           $('.slider').slick('slickPrev');
           mous_dwn_counter2 = 0;
         }
      }
  }

  window.addEventListener("wheel", doScroll, false);



  if ($(window).width() < 720) {
     var touchPos;

     // store the touching position at the start of each touch
     document.body.ontouchstart = function(e){
         touchPos = e.changedTouches[0].clientY;
     }

     // detect wether the "old" touchPos is 
     // greater or smaller than the newTouchPos
     document.body.ontouchmove = function(e){
         let newTouchPos = e.changedTouches[0].clientY;
         if(newTouchPos > touchPos) {
             console.log("finger moving down");
         }
         if(newTouchPos < touchPos) {
          let ras_top = touchPos - newTouchPos;
          if (ras_top > 200) {
            if (counter == 1 && mous_dwn_counter == 1 && scrl_tr == 0) {
               $('.slider').slick('slickNext');
               mous_dwn_counter = 0;
             }
          }
            
             
         }
     }
  }
  
})




  
