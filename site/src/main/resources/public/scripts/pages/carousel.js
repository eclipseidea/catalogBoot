/* ----------------------------------------------------
 *  Carousel
 *
 *  JavaScript file for the ui.carousel.html
 *  
 *  Description: Codes for the ui.carousel.html, contains the demo.
 *    for owl.carousel.js
 *  Official Docs: https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
 * ---------------------------------------------------- */

/*global
    jQuery
*/


(function($) {
    'use strict';

    // Basic Carousel
    $('.owl-carousel-basic').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    // Carousel with the first item centered on the screen
    $('.owl-carousel-center-loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });


    // Carousel with no loop
    $('.owl-carousel-center-no-loop').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });


    // Merged items in the carousel
    $('.owl-carousel-merge').owlCarousel({
        items:5,
        loop:true,
        margin:10,
        merge:true,
        responsive:{
            678:{
                mergeFit:true
            },
            1000:{
                mergeFit:false
            }
        }
    });


    // Carousel with lazy load
    $('.owl-carousel-lazy-load').owlCarousel({
        items:4,
        lazyLoad:true,
        loop:true,
        margin:10
    });


    // Carousel with animated entries
    $('.owl-carousel-animated').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });


    // Carousel with videos
     $('.owl-carousel-video').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    });
        
})(jQuery);