(function($){
  "use strict";

  $(window).on('load', function(){

    // menu options custom affix
    var fixed_top = $(".header");
    $(window).on("scroll", function(){
        if( $(window).scrollTop() > 50){  
            fixed_top.addClass("animated fadeInDown menu-fixed");
        }
        else{
            fixed_top.removeClass("animated fadeInDown menu-fixed");
        }
    });

    // mobile menu js
    $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
      let element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
      }
      else {
        element.addClass("open");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
      }
    });

    // new WOW().init();
      
    // lightcase plugin init
    $('a[data-rel^=lightcase]').lightcase();

    let img=$('.bg_img');
    img.css('background-image', function () {
      let bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $('select').niceSelect();

    $('.winner-slider').slick({
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-long-arrow-alt-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-long-arrow-alt-left"></i></div>',
    });

    $('.contest-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-long-arrow-alt-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-long-arrow-alt-left"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('.contest-cart__thumb-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.contest-cart__nav-slider'
    });

    $('.contest-cart__nav-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.contest-cart__thumb-slider',
      dots: false,
      centerMode: true,
      nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });


    $('.contest-details__thumb-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.contest-details__nav-slider'
    });

    $('.contest-details__nav-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.contest-details__thumb-slider',
      dots: false,
      centerMode: true,
      nextArrow: '<div class="next"><i class="las la-angle-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-angle-left"></i></div>',
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });



    // date picker js 
    $('.datepicker-here').datepicker();

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-down"><i class="las la-minus"></i></div><div class="quantity-button quantity-up"><i class="las la-plus"></i></div></div>').insertAfter('.quantity input');
      jQuery('.quantity').each(function () {
          var spinner = jQuery(this),
              input = spinner.find('input[type="number"]'),
              btnUp = spinner.find('.quantity-up'),
              btnDown = spinner.find('.quantity-down'),
              min = input.attr('min'),
              max = input.attr('max');
    });


  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
  });

  $('.theme-switcher__icon').on('click', function(){
    $('.theme-switcher').toggleClass('active');
  });

})(jQuery);

var onlineStaff = [
  'http://wa.me//+918089114896',//shabin
  'http://wa.me//+917994138307',//nisham
  'http://wa.me//+918943332002',//shakeeb
  'http://wa.me//+918138831899',//shabeeb
  'http://wa.me//+918089114896',//shabin
  'http://wa.me//+917994138307',//nisham
  'http://wa.me//+918943332002',//shakeeb
  'http://wa.me//+918138831899',//shabeeb
  'http://wa.me//+918089114896',//shabin
  'http://wa.me//+917994138307',//nisham
  'http://wa.me//+918943332002',//shakeeb
  'http://wa.me//+918138831899'//shabeeb
];

function randomOnlineStaff () {
  var i = parseInt(Math.random() * onlineStaff.length);
  location.href = onlineStaff[i];
}

var Staff = [
  'tel:+917994138307',//nisham
  'tel:+918138831899',//shabeeb
  'tel:+919207589667',
  'tel:+917994138307',//nisham
  'tel:+918138831899',//shabeeb
  'tel:+918943332002',
  'tel:+917994138307',//nisham
  'tel:+918138831899',//shabeeb
  'tel:+918943332002'
];

function randomStaff () {
  var i = parseInt(Math.random() * Staff.length);
  location.href = Staff[i];
  console.log(Staff[i])
}
