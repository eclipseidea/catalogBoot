/* ----------------------------------------------------
 *  Validation
 *
 *  JavaScript file for forms.validation.html
 *
 *  Description: Contains codes from jquery.validation.js
 *  Offical Site: https://jqueryvalidation.org/
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/

var Validation = (function($) {

    'use strict';


    /* ------------------------- 
        Begin Validation
     ------------------------- */

    var initValidation = function() {
        // Avoids form submit
        $.validator.setDefaults({
          debug: true,
          success: 'valid'
        });

        // Begin Form One

        // Object to be passed in the validate() method
        var rulesFormOne = {
            exampleInputFirstName1: {
                required: true
            },
            exampleInputUsername1: {
                required: true,
                minlength: 4
            },
            exampleInputPassword1: {
                required: true,
                range: [7, 20]
            },
            exampleInputConfirmPassword1: {
                required: true,
                equalTo: '#exampleInputPassword1'
            },
            exampleInputEmail1: {
                required: true,
                email: true
            }
        };

        // Call form validaiton method
        $('#form-one').validate({
            rules: rulesFormOne
        });

        // End Form One


        // Begin Form Two

        // Object to be passed in the validate() method
        var rulesFormTwo = {
            exampleInputFirstName2: {
                required: true
            },
            exampleInputUsername2: {
                required: true,
                minlength: 4
            },
            exampleInputPassword2: {
                required: true,
                range: [7, 20]
            },
            exampleInputConfirmPassword2: {
                required: true,
                equalTo: '#exampleInputPassword2'
            },
            exampleInputEmail2: {
                required: true,
                email: true
            }
        };

        // Call form validaiton method
        $('#form-two').validate({
            rules: rulesFormTwo
        });

        // End Form One


        // Begin Form Validation

        // Object to be passed in the validate() method
        var rulesFormValidation = {
            exampleInputRequired: {
                required: true
            },
            exampleInputMinlength: {
                required: true,
                minlength: 3
            },
            exampleInputMaxlength: {
                required: true,
                maxlength: 6
            },
            exampleInputRangeLength: {
                required: true,
                rangelength: [3, 6]
            },
            exampleInputMin: {
                required: true,
                min: 10
            },
            exampleInputMax: {
                required: true,
                max: 20
            },
            exampleInputRange: {
                required: true,
                range: [10, 20]
            },
            exampleInputEmail: {
                required: true,
                email: true
            },
            exampleInputUrl: {
                required: true,
                url: true
            },
            exampleInputDate: {
                required: true,
                date: true
            },
            exampleInputDateISO: {
                required: true,
                dateISO: true
            },
            exampleInputNumber: {
                required: true,
                number: true
            },
            exampleInputDigits: {
                required: true,
                digits: true
            },
            exampleInputCreditCard: {
                required: true,
                digits: true
            }
        };


        // Call form validaiton method
        $('#form-validation').validate({
            rules: rulesFormValidation
        });

        // End Form Validation
    };

    /* ------------------------- 
        End Validation
     ------------------------- */

    return {
        Init: function() {
            initValidation();
        }
    };
})(jQuery);


// Initiate the Validation
$(function() { Validation.Init(); });