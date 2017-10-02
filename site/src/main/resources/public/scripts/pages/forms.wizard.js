/* ----------------------------------------------------
 *  Wizard
 *
 *  JavaScript file for the forms.wizard.html.
 *
 *  Description: Contains codes from jQuery Steps & bootstrapWizard
 *  Offical Site: http://www.jquery-steps.com/
 *                https://github.com/VinceG/twitter-bootstrap-wizard
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/ 


'use strict';

var Wizard = function($) {


    /* ------------------------- 
        Begin jQuery Steps
     ------------------------- */

    var Steps = function() {
        // Store the form element
        var form = $('#example-advanced-form').show();
    

        // Initiate the jQuery Steps Wizard
        form.steps({
            headerTag: 'h3',
            bodyTag: 'fieldset',
            transitionEffect: 'slideLeft',
            onStepChanging: function (event, currentIndex, newIndex)
            {
                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex)
                {
                    return true;
                }
                // Forbid next action on "Warning" step if the user is to young
                if (newIndex === 3 && Number($('#age-2').val()) < 18)
                {
                    return false;
                }
                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex)
                {
                    // To remove error styles
                    form.find('.body:eq(' + newIndex + ') label.error').remove();
                    form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
                }
                form.validate().settings.ignore = ':disabled,:hidden';
                return form.valid();
            },
            onStepChanged: function (event, currentIndex, priorIndex)
            {
                // Used to skip the "Warning" step if the user is old enough.
                if (currentIndex === 2 && Number($('#age-2').val()) >= 18)
                {
                    form.steps('next');
                }
                // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
                if (currentIndex === 2 && priorIndex === 3)
                {
                    form.steps('previous');
                }
            },
            onFinishing: function (event, currentIndex)
            {
                form.validate().settings.ignore = ':disabled';
                return form.valid();
            },
            onFinished: function (event, currentIndex)
            {
                alert('Submitted!');
            }
        }).validate({
            errorPlacement: function errorPlacement(error, element) { element.after(error); },
            rules: {
                confirm: {
                    equalTo: '#password-2'
                }
            }
        });
    };

    /* ------------------------- 
        End jQuery Steps
     ------------------------- */


    /* ------------------------- 
        Begin Boostrap Wizard
     ------------------------- */ 

    var BootstrapWizard = function() {

        // Initiate bootstrap wizard
        $('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#rootwizard').find('.bar').css({width:$percent+'%'});
            
            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $('#rootwizard').find('.pager .next').hide();
                $('#rootwizard').find('.pager .finish').show();
                $('#rootwizard').find('.pager .finish').removeClass('disabled');
            } else {
                $('#rootwizard').find('.pager .next').show();
                $('#rootwizard').find('.pager .finish').hide();
            }
            
        }});
    };

    /* ------------------------- 
        End Bootstrap Wizard
     ------------------------- */


    // Return all the function under Init
    return {
        Init: function() {
            Steps();
            BootstrapWizard();
        }
    };
}(jQuery);

// Initiate the Wizard
$(function() { Wizard.Init(); });