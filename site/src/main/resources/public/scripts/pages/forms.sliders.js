/* ----------------------------------------------------
 *  Sliders
 *
 *  JavaScript file for the forms.sliders.html.
 *
 *  Description: Contains codes from noUiSlider.js & ion.rangeSlider.js
 *  Offical Site: https://refreshless.com/nouislider/
 *                http://ionden.com/a/plugins/ion.rangeSlider/en.html
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/ 

var Sliders = (function($) {
    'use strict';


    /* ------------------------- 
        Begin noUI Slider
     ------------------------- */

    var initNoUISliders = function() {
        // Elements of Basic Sliders and Vertical Sliders
        var sliders = document.getElementsByClassName('sliders-basic');
        var slidersVertical = document.getElementsByClassName('sliders-basic-vertical');


        // Initiate Basic Sliders
        for ( var i = 0; i < sliders.length; i++ ) {
            noUiSlider.create(sliders[i], {
                start: Math.round(Math.random()*150) + 50,
                connect: [true, false],
                range: {
                    'min': 0,
                    'max': 255
                }
            });
        }


        // Initiate Vertical Sliders
        for ( var i = 0; i < slidersVertical.length; i++ ) {
            noUiSlider.create(slidersVertical[i], {
                start: Math.round(Math.random()*150) + 50,
                connect: [true, false],
                orientation: 'vertical',
                range: {
                    'min': 0,
                    'max': 255
                }
            });
        }


        // Elements for Step Sliders
        var stepSlider = document.getElementById('slider-step');


        // Initiate Step Slider
        noUiSlider.create(stepSlider, {
            start: [ 20, 80 ],
            step: 10,
            connect: true,
            range: {
              'min': 0,
              'max': 100
            }
        });


        // Elements for Limit Slider
        var limitSlider = document.getElementById('slider-limit');


        // Initiate Limit Slider
        noUiSlider.create(limitSlider, {
            start: [ 10, 120 ],
            limit: 40,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });


        // Elemnts for Margin Slider
        var marginSlider = document.getElementById('slider-margin');

        // Initiate Margin Slider
        noUiSlider.create(marginSlider, {
            start: [ 20, 80 ],
            margin: 30,
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });


        // Elements for Slider without connect
        var wihtoutConnectSlider = document.getElementById('slider-wihtout-connect');


        // Initiate Slider without connect
        noUiSlider.create(wihtoutConnectSlider, {
            start: [ 20, 80 ],
            margin: 30,
            // connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });


        // Create a new date from a string, return as a timestamp.
        function timestamp(str){
            return new Date(str).getTime();   
        }

        // Create a list of day and monthnames.
        var weekdays = [
                'Sunday', 'Monday', 'Tuesday',
                'Wednesday', 'Thursday', 'Friday',
                'Saturday'
            ],
            months = [
                'January', 'February', 'March',
                'April', 'May', 'June', 'July',
                'August', 'September', 'October',
                'November', 'December'
            ];

        // Append a suffix to dates.
        // Example: 23 => 23rd, 1 => 1st.
        function nth (d) {
          if(d>3 && d<21) return 'th';
          switch (d % 10) {
                case 1:  return 'st';
                case 2:  return 'nd';
                case 3:  return 'rd';
                default: return 'th';
            }
        }

        // Create a string representation of the date.
        function formatDate ( date ) {
            return weekdays[date.getDay()] + ', ' +
                date.getDate() + nth(date.getDate()) + ' ' +
                months[date.getMonth()] + ' ' +
                date.getFullYear();
        }


        // Elements for dateslider
        var dateSlider = document.getElementById('slider-date');

        // Initiate Date Slider
        noUiSlider.create(dateSlider, {
        // Create two timestamps to define a range.
            range: {
                min: timestamp('2010'),
                max: timestamp('2016')
            },
            connect: true,

        // Steps of one week
            step: 7 * 24 * 60 * 60 * 1000,

        // Two more timestamps indicate the handle starting positions.
            start: [ timestamp('2011'), timestamp('2015') ],

        // No decimals
            format: wNumb({
                decimals: 0
            })
        });

        // Date Elements
        var dateValues = [
            document.getElementById('event-start'),
            document.getElementById('event-end')
        ];


        // Update date to the elements
        dateSlider.noUiSlider.on('update', function( values, handle ) {
            dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
        });
    };

    /* ------------------------- 
        End noUI Slider
     ------------------------- */


    /* ------------------------- 
        Begin ionRangeSlider
     ------------------------- */

    var initIonRangeSlider = function() {
        // Basic ion Range Slider
        $('#basic-single-ion').ionRangeSlider({
            style: 'default'
        });


        // Ion Range Slider with double sliders
        $('#basic-double-ion').ionRangeSlider({
            type: 'double',
            style: 'default',
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: '$'
        });


        // Default Colors Ion range Slider
        $('#default-ion').ionRangeSlider({
            type: 'double',
            style: 'default',
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 500,
            prefix: '$'
        });


        // Primary Colored Range Slider
        $('#primary-ion').ionRangeSlider({
            type: 'double',
            style: 'primary',
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: '$'
        });


        // Success Colored Range Slider
        $('#success-ion').ionRangeSlider({
            type: 'double',
            style: 'success',
            grid: true,
            min: 0,
            max: 1000,
            from: 300,
            to: 700,
            prefix: '$'
        });

        // Info colored Range Slider
        $('#info-ion').ionRangeSlider({
            type: 'double',
            style: 'info',
            grid: true,
            min: 0,
            max: 1000,
            from: 100,
            to: 800,
            prefix: '$'
        });


        // Warning colored Range Slider
        $('#warning-ion').ionRangeSlider({
            type: 'double',
            style: 'warning',
            grid: true,
            min: 0,
            max: 1000,
            from: 400,
            to: 900,
            prefix: '$'
        });


        // Danger colored range slider
        $('#danger-ion').ionRangeSlider({
            type: 'double',
            style: 'danger',
            grid: true,
            min: 0,
            max: 1000,
            from: 400,
            to: 700,
            prefix: '$'
        });


        // Custom array range slider
        $('#custom-array-ion').ionRangeSlider({
            grid: true,
            from: 3,
            values: [
                'January', 'February', 'March',
                'April', 'May', 'June',
                'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        });


        // Decorated range sliders
        $('#decorating-ion').ionRangeSlider({
            grid: true,
            min: 18,
            max: 70,
            from: 30,
            prefix: 'Age ',
            max_postfix: '+'
        });


        // Grid ion range slider
        $('#grid-ion').ionRangeSlider({
            type: 'double',
            min: 0,
            max: 10000
        });


        // Slider with handles locked
        $('#lock-handles-ion').ionRangeSlider({
            type: 'double',
            min: 0,
            max: 100,
            from: 30,
            to: 70,
            from_fixed: true
        });


        // Limited movement ion range slider
        $('#movement-limits-ion').ionRangeSlider({
            min: 0,
            max: 100,
            from: 30,
            from_min: 10,
            from_max: 50
        });


        // Disbaled ion range slider
        $('#disabled-ion').ionRangeSlider({
            min: 0,
            max: 100,
            from: 30,
            disable: true
        });
    };

    /* ------------------------- 
        End ionRangeSlider
     ------------------------- */


    // Return all the functions under Init
    return {
        Init: function() {
            initNoUISliders();
            initIonRangeSlider();
        }
    }
})(jQuery);


// Initiate the Sliders
jQuery(function() { Sliders.Init(); });