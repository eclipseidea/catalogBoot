/* ----------------------------------------------------
 *  Notificaiton
 *
 *  JavaScript file for the ui.notification.html.
 *
 *  Description: Contains codes from scripts/pages/notification.js
 *  Offical Site: Specific to XPLOIT Admin Template
 * ---------------------------------------------------- */
 
 /*global
    jQuery
*/ 

var Notification = (function($) {
	'use strict';


    /* ------------------------- 
        Begin Notification Demo
     ------------------------- */

    var initDemo = function () {
        // Call Notification on clicking the dummies
        $('.dummy-notification').on('click', function() {
            var notificationType = $(this).parent().attr('class').split(' ')[1].replace('-notification-dummy', '');
            var notificationPos = $(this).attr('class').split(' ')[1].replace('dummy-', '');

            var notificationMessage = $('#notify-message').val()
            var notificationStyle = $('.li-active').text().toLowerCase();

            $('body').notify({
                type: notificationType,
                message: notificationMessage,
                position: notificationPos,
                style: notificationStyle
            })
        });


        // Remove all the notifications when changed to another tab
        $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
            $('.notify-container').remove();
        });


        // Adding active class to the current tab
        $('.notification-style > .list-inline > li').on('click', function() {
            $('.notification-style > .list-inline > li').removeClass('li-active')
            $(this).addClass('li-active')
        })
    };

    /* ------------------------- 
        End Notification Demo
     ------------------------- */

    // Return the function under Init
    return {
        Init: function() {
            initDemo();
        }
    }
})(jQuery);


// Initiate the Notification
$(function() { Notification.Init(); });