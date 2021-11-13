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
    responsive: [
        {
          breakpoint: 720,
          settings: {
            verticalSwiping: true,
          }
        }
      ]
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
         if ($('.slider-slide-11').hasClass('slick-current')) {
          $(".slider").not('.slick-initialized').slick({
            verticalSwiping: false,
          })
          $(".slider").slick('reinit');
         
         }
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
  $('.slider').on('beforeChange', function (event, slick, currentSlide) {
    return false;
  });
  $('.slider').on('afterChange', function (event, currentSlide) {
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
     
  }
  
})


function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  var min_x = 30;  //min x swipe for horizontal swipe
  var max_x = 30;  //max x difference for vertical swipe
  var min_y = 50;  //min y swipe for vertical swipe
  var max_y = 60;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX; 
    swipe_det.eY = t.screenY;    
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if(swipe_det.eY > swipe_det.sY) direc = "d";
      else direc = "u";
    }

    if (direc != "") {
      if(typeof func == 'function') func(el,direc);
    }
    direc = "";
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  },false);  
}

function myfunction(el,d) {
  alert("you swiped on element with id '"+el+"' to "+d+" direction");
}

  
