
$(document).ready(function(){

    // aos (animate on scroll)
    AOS.init();

    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    // navbar background change in scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 80){
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    // smooth scroll
    let links = $('.navbar-nav a.nav-link');
    links.click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });


    // popup gallery 
    // $(document).ready(function() {
    //     $('.popup-gallery').magnificPopup({
    //         delegate: 'a',
    //         type: 'image',
    //         tLoading: 'Loading image #%curr%...',
    //         mainClass: 'mfp-img-mobile',
    //         gallery: {
    //             enabled: true,
    //             navigateByImgClick: true,
    //             preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    //         },
    //         image: {
    //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //             titleSrc: function(item) {
    //                 return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    //             }
    //         }
    //     });
    // });

    // slick slider 
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});

var swiper = new Swiper(".cheves", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
