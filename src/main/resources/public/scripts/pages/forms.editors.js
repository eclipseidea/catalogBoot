/* ----------------------------------------------------
 *  Editors
 *
 *  JavaScript file for the forms.editors.html.
 *
 *  Description: Contains codes only specific to summernote.js
 *  Offical Docs: http://summernote.org/getting-started/
 * ---------------------------------------------------- */
 
/*global
    $,
    jQuery
*/ 


var SummerNote = (function() {
    'use strict';


    /* ------------------------- 
        Begin Summernote
     ------------------------- */

    var initSummernote = function() {
        // Summernote Basic
        $('#summernote').summernote();


        // Summernote Inline Editing
        $('#summernote-airmode').summernote({
            airMode: true
        });


        // Summernote Click to Edit
        $('#edit').on('click', function() {
            $('.click2edit').summernote({focus: true});
        });
                 
        // Click to edit function
        $('#save').on('click', function() {
            $('.click2edit').summernote('code');
            $('.click2edit').summernote('destroy');
        });
    };

    /* ------------------------- 
        End Summernote
     ------------------------- */


    // Return the function under Init
    return {
        Init: function() {
            initSummernote();
        }
    }
})();



// Initiate the Summernote
jQuery(function() { SummerNote.Init(); });