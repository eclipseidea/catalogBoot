/* ----------------------------------------------------
 *  Editable
 *
 *  JavaScript file for the tables.editables.html.
 *
 *  Description: Contains codes only specific to jquery.editable.js
 *  Offical Docs: https://vitalets.github.io/x-editable/docs.html
 * ---------------------------------------------------- */



/*global
    $,
    jQuery
*/

var Editable = (function() {
    'use strict';

    /* ------------------------- 
        Begin Mockjax
     ------------------------- */

    var initMockjax = function() {
        //ajax mocks
        $.mockjaxSettings.responseTime = 500; 
        

        // Mockjax Post
        $.mockjax({
            url: '/post',
            response: function(settings) {
                log(settings, this);
            }
        });


        // Mockjax Error
        $.mockjax({
            url: '/error',
            status: 400,
            statusText: 'Bad Request',
            response: function(settings) {
                this.responseText = 'Please input correct value'; 
                log(settings, this);
            }        
        });
        

        // Mockjax Status
        $.mockjax({
            url: '/status',
            status: 500,
            response: function(settings) {
                this.responseText = 'Internal Server Error';
                log(settings, this);
            }        
        });
        

        // Mockjax Groups
        $.mockjax({
            url: '/groups',
            response: function(settings) {
                this.responseText = [ 
                 {value: 0, text: 'Guest'},
                 {value: 1, text: 'Service'},
                 {value: 2, text: 'Customer'},
                 {value: 3, text: 'Operator'},
                 {value: 4, text: 'Support'},
                 {value: 5, text: 'Admin'}
               ];
               log(settings, this);
            }        
        });
        

        // Mockjax Log
        function log(settings, response) {
                var s = [], str;
                s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
                for(var a in settings.data) {
                    if(settings.data[a] && typeof settings.data[a] === 'object') {
                        str = [];
                        for(var j in settings.data[a]) {str.push(j+': "'+settings.data[a][j]+'"');}
                        str = '{ '+str.join(', ')+' }';
                    } else {
                        str = '"'+settings.data[a]+'"';
                    }
                    s.push(a + ' = ' + str);
                }
                s.push('RESPONSE: status = ' + response.status);

                if(response.responseText) {
                    if($.isArray(response.responseText)) {
                        s.push('[');
                        $.each(response.responseText, function(i, v){
                           s.push('{value: ' + v.value+', text: "'+v.text+'"}');
                        }); 
                        s.push(']');
                    } else {
                       s.push($.trim(response.responseText));
                    }
                }
                s.push('--------------------------------------\n');
                $('#console').val(s.join('\n') + $('#console').val());
        }
    };

    /* ------------------------- 
        End Mockjax
     ------------------------- */



    /* ------------------------- 
        Begin Editable
     ------------------------- */

    var initEditable = function() {
        // defaults
        $.fn.editable.defaults.url = '/post'; 
        // $.fn.editable.defaults.mode = 'inline';

        // enable / disable
        $('#enable').on('click', function() {
            $('#user .editable').editable('toggleDisabled');
        });    
        
        // editables 
        $('#username').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username'
        });
        
        // validation
        $('#firstname').editable({
            validate: function(value) {
                if($.trim(value) == '') return 'This field is required';
            }
        });
        

        // Dropdown
        $('#sex').editable({
            prepend: 'not selected',
            source: [
                {value: 1, text: 'Male'},
                {value: 2, text: 'Female'}
            ],
            display: function(value, sourceData) {
                var colors = {'': 'gray', 1: 'green', 2: 'blue'},
                elem = $.grep(sourceData, function(o){return o.value == value;});

                if(elem.length) {    
                    $(this).text(elem[0].text).css('color', colors[value]); 
                } else {
                    $(this).empty(); 
                }
            }
        }); 
        

        // Error
        $('#status').editable();   
        

        // Error
        $('#group').editable({
            showbuttons: false 
        });


        // Date
        $('#vacation').editable({
            datepicker: {
                todayBtn: 'linked'
            } 
        });

        // Custom Date
        $('#dob').editable();


        // Custom Date Time
        $('#event').editable({
            placement: 'right',
            combodate: {
                firstItem: 'name'
            }
        });      
        

        // Custom Date Time
        $('#meeting_start').editable({
            format: 'yyyy-mm-dd hh:ii',    
            viewformat: 'dd/mm/yyyy hh:ii',
            validate: function(v) {
                if(v && v.getDate() == 10) return 'Day cant be 10!';
            },
            datetimepicker: {
                todayBtn: 'linked',
                weekStart: 1
            }        
        });
        

        // Text Area
        $('#comments').editable({
            showbuttons: 'bottom'
        });


        // Checkbox
        $('#fruits').editable({
            pk: 1,
            limit: 3,
            source: [
                {value: 1, text: 'banana'},
                {value: 2, text: 'peach'},
                {value: 3, text: 'apple'},
                {value: 4, text: 'watermelon'},
                {value: 5, text: 'orange'}
            ]
        });
    };

    /* ------------------------- 
        End Editable
     ------------------------- */


    // Return all the functions under Init
    return {
        Init: function() {
            initMockjax();
            initEditable();
        }
    }
})();

// Initiate the Dashboard
jQuery(function() { Editable.Init(); });