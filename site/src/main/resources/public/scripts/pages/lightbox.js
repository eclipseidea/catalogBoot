/* ----------------------------------------------------
 *  Lightbox
 *
 *  JavaScript file for the ui.lightbox.html.
 *
 *  Description: Contains codes from jquery lightgallery.js
 *  Offical Site: http://sachinchoolur.github.io/lightGallery/
 * ---------------------------------------------------- */


/*global
    jQuery
*/ 

var LightGallery = (function($) {
    'use strict';


    /* ------------------------- 
        Begin Light Gallery
     ------------------------- */

    var initLightGallery = function() {
        // Basic
        $('#lightgallery-default').lightGallery({
            thumbnail:true
        }); 

        // Animated Entrance for the images
        $('#aniimated-thumbnials2').lightGallery({
            thumbnail:true
        });


        // Calling the trans
        $('#select-trans').on('change', function() {
            $('#aniimated-thumbnials2').data('lightGallery').destroy(true);
            customTransitions($(this).val());
        });

        function customTransitions(trans) {
            $('#aniimated-thumbnials2').lightGallery({
                mode: trans
            })
        };


        // Light Gallery with Videos
        $('#gallery-video').lightGallery(); 
        $('#gallery-video-v').lightGallery();
    };

    /* ------------------------- 
        End Light Gallery
     ------------------------- */

    // Return all the functions under Init
    return {
        Init: function() {
            initLightGallery();
        }
    };


})(jQuery);


// Initiate the Gallery
$(function() { LightGallery.Init(); });