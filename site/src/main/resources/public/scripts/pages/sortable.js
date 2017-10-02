/* ----------------------------------------------------
 *  Sortable
 *
 *  JavaScript file for the ui.sortable.html.
 *
 *  Description: Contains codes from jquery.sortable.js
 *  Offical Site: http://farhadi.ir/projects/html5sortable/
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/ 

var Sortable = (function($) {

	'use strict';

	/* ------------------------- 
        Begin Sortable
     ------------------------- */

	var initSortable = function() {
		$('#sortable1, #sortable2').sortable();

	    $('#sortable3').sortable({
		    items: ':not(.disabled)'
		});

		$('#sortable-with-handles').sortable({
			handle: '.handle'
		});
		
		$('#sortable5, #sortable6').sortable({
			connectWith: '.connected'
		});
	};


	/* ------------------------- 
        End Sortable
     ------------------------- */

	return {
		Init: function() {
			initSortable();
		}
	};

})(jQuery);


// Initiate the Sortable
$(function() { Sortable.Init(); });