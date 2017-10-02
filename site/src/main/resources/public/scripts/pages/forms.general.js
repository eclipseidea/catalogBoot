/* ----------------------------------------------------
 *  Forms General
 *
 *  JavaScript file for the forms.general.html.
 *
 *  Description: Contains different plugin codes that 
 *              are used for forms.general.html
 *
 *              Below are the plugins used
 *                  1. bootstrap-datepicker
 *                  2. bootstrap-daterangepicker
 *                  3. dropzone
 *                  4. Typeahead
 *                  5. Select2
 *  Offical Docs: 
 *      1. https://github.com/eternicode/bootstrap-datepicker
 *      2. http://www.daterangepicker.com/
 *      3. https://github.com/enyo/dropzone
 *      4. https://twitter.github.io/typeahead.js/
 *      5. https://select2.github.io/
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/ 


var FormsGeneral = (function($) {
    'use strict';


    /* ------------------------- 
        Begin Datepicker
     ------------------------- */

    var initDatePicker = function() {
        // Initiate Datepicker
        $('#datepicker-startdate, #datepicker-enddate').datepicker({
            autoclose: true
        });


        // Initiate Daterange Picker
        $('.input-daterange').datepicker();
    };

    /* ------------------------- 
        End Datepicker
     ------------------------- */



    /* ------------------------- 
        Begin DateRangepicker
     ------------------------- */

    var initDateRangePicker = function() {
        // Initiate Simple Date Range Picker
        $('#daterangepicker-date').daterangepicker();


        // Initiate Date Time Picker
        $('#daterangepicker-datetime').daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });


        // Initiate Single Date Picker
        $('#daterangepicker-singledate').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        },
        function(start, end, label) {
            var years = moment().diff(start, 'years');
            alert('You are ' + years + ' years old.');
        });


        // Initiate Empty Daterange picker
        $('#daterangepicker-empty').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });


        // Update the input
        $('#daterangepicker-empty').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });


        // Update the input
        $('#daterangepicker-empty').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });


        // Callback function
        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        };

        // Call the function
        cb(moment().subtract(29, 'days'), moment());


        // Initiate Daterange picker with pre-defined date
        $('#reportrange').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
    };

    /* ------------------------- 
        End DateRangepicker
     ------------------------- */



    /* ------------------------- 
        Begin Dropzone
     ------------------------- */

    var initDropZone = function() {
        // Diable dropzone auto discover
        Dropzone.autoDiscover = false;

        // Initialize the dropzone file uploader
        var dropzone = new Dropzone('#demo-upload', {
            previewTemplate: document.querySelector('#preview-template').innerHTML,
            parallelUploads: 2,
            dictDefaultMessage: '<h3>Drop files here to upload</h3><p class=\'m-n\'>or</p><p class=\'m-n\'>Click here</p>',
            thumbnailHeight: 120,
            thumbnailWidth: 120,
            maxFilesize: 3,
            filesizeBase: 1000,
            thumbnail: function(file, dataUrl) {
                if (file.previewElement) {
                    file.previewElement.classList.remove('dz-file-preview');
                    var images = file.previewElement.querySelectorAll('[data-dz-thumbnail]');
                    for (var i = 0; i < images.length; i++) {
                        var thumbnailElement = images[i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    setTimeout(function() { file.previewElement.classList.add('dz-image-preview'); }, 1);
                }
            }

        });


        // Now fake the file upload, since GitHub does not handle file uploads
        // and returns a 404

        var minSteps = 6,
        maxSteps = 60,
        timeBetweenSteps = 100,
        bytesPerStep = 100000;


        // Fake the file uploads for demo purpose
        dropzone.uploadFiles = function(files) {
            var self = this;

            for (var i = 0; i < files.length; i++) {

                var file = files[i];
                totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

                for (var step = 0; step < totalSteps; step++) {
                    var duration = timeBetweenSteps * (step + 1);
                    setTimeout(function(file, totalSteps, step) {
                        return function() {
                            file.upload = {
                                progress: 100 * (step + 1) / totalSteps,
                                total: file.size,
                                bytesSent: (step + 1) * file.size / totalSteps
                            };

                            self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
                            if (file.upload.progress == 100) {
                                file.status = Dropzone.SUCCESS;
                                self.emit('success', file, 'success', null);
                                self.emit('complete', file);
                                self.processQueue();
                            }
                        };
                    }(file, totalSteps, step), duration);
                }
            }
        };
    };

    /* ------------------------- 
        End Dropzone
     ------------------------- */


    /* ------------------------- 
        Begin Typeahead
     ------------------------- */

    var initTypeahead = function() {
        // Substring function to match the strings
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        matches.push(str);
                    }
                });

                cb(matches);
            };
        };


        // Data for typeahead
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];


        // Basic Typeahead
        $('#the-basics .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'states',
            source: substringMatcher(states)
        });


        // constructs the suggestion engine
        var states = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            // `states` is an array of state names defined in "The Basics"
            local: states
        });


        // Typeahead with bloodhound
        $('#bloodhound .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'states',
            source: states
        });


        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            // url points to a json file that contains an array of country names, see
            // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
            prefetch: 'scripts/pages/countries.json'
        });

        // passing in `null` for the `options` arguments will result in the default
        // options being used
        $('#prefetch .typeahead').typeahead(null, {
            name: 'countries',
            source: countries
        });
    };

    /* ------------------------- 
        End Typeahead
     ------------------------- */



    /* ------------------------- 
        Begin Select2
     ------------------------- */

    var initSelect2 = function() {
        // Initiate Basic Select2
        $('.select2-basic').select2();

        // Initiate Multiple Selection
        $('.select2-multiple').select2();

        // Initiate Select2 with disabled results
        $('.select2-disabled-results').select2();
    };

    /* ------------------------- 
        End Select2
     ------------------------- */


    // Return all the functions under Init
    return {
        Init: function() {
            initDatePicker();
            initDateRangePicker()
            initDropZone();
            initTypeahead();
            initSelect2();
        }
    }
})(jQuery);

// Initiate the Forms
jQuery(function() { FormsGeneral.Init(); });