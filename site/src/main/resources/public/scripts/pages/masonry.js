/* ----------------------------------------------------
 *  Masonry
 *
 *  JavaScript file for the ui.masonry.html.
 *
 *  Description: Contains codes from masonry.pkgd.js
 *  Offical Site: http://masonry.desandro.com/
 * ---------------------------------------------------- */
 
 /*global
    jQuery
*/ 

var Masonry = (function($) {
    'use strict';


    /* ------------------------- 
        Begin Masonry
     ------------------------- */

    var initGrid = function() {
        // Initiate the masonry grid
        var $grid = $('.masonry-grid').imagesLoaded( function() {
            $grid.masonry({
                itemSelector: '.masonry-grid-item',
                percentPosition: true,
                columnWidth: '.masonry-grid-sizer'
            }); 
        });
    };

    /* ------------------------- 
        End Masonry
     ------------------------- */

    return {
        Init: function() {
            initGrid();
        }
    };
})(jQuery);



// Initiate the Masonry
$(function() { Masonry.Init(); });