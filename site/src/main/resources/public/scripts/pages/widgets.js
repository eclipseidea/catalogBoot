/* ----------------------------------------------------
 *  Widgets
 *
 *  JavaScript file for ui.widgets.html
 *
 *  Description: Specific to XPLOIT
 *  Offical Site: Specific to XPLOIT
 * ---------------------------------------------------- */
 
/*global
    $
*/

'use strict';


var Widgets = (function() {

    /* ------------------------- 
        Begin Noted Widget
     ------------------------- */

    var initNotesWidget = function() {

        var $notesWidgetContainer = $('.notes-widget'),
            $showChar = 50,
            $ellipsesText = '...',
            $moreText = 'more',
            $lessText = 'less';

        var $notes = $('.notes-list p');

        $notes.each(function() {
            var $content = $(this).html();

            if($content.length > $showChar) {
                var $c = $content.substr(0, $showChar),
                    $h = $content.substr($showChar - 1, $content.length - $showChar);

                var $html = '<span class="visible-content">' + $c + '</span><span class="moreellipses">' + $ellipsesText+ '&nbsp;</span><span class="hidden-content">' +
                            $h + '</span>';
 
                    $(this).html($html);
            }
        });

        var $notesEditorBody = $('.notes-editor-body'),
            $notesListv = $('.notes-list > li:first-child > p > .visible-content'),
            $notesListh = $('.notes-list > li:first-child > p > .hidden-content');

        $notesEditorBody.html($notesListv.text() + $notesListh.text());

        $('.notes-list-container').mCustomScrollbar({
            autoHideScrollbar: true
        });


        var $notesLi = $('.notes-list > li');

        $notesLi.on('click', function() {
            $notesEditorBody.html('');

            $notesEditorBody.html($(this).find('.visible-content').text() + $(this).find('.hidden-content').text());
        })

    };

    /* ------------------------- 
        End Noted Widget
     ------------------------- */


    /* ------------------------- 
        Begin Blog Post Widget
     ------------------------- */

    var initBlogPost = function() {
        // Initiate scrollbar for the widget
        $('.blog-post-content').mCustomScrollbar({
            autoHideScrollbar: true
        });
    };

    /* ------------------------- 
        End Blog Post Widget
     ------------------------- */


    /* ------------------------- 
        Begin Income  Widget
     ------------------------- */
    var initIncomeChart = function() {
        // Initiate the chart
        jQuery('.income-chart').highcharts({
            chart: {                                                        // chart - specifies the chart height,
                height: 240,                                                // background, border, bordercolor, borderradius
                backgroundColor: '#00abe8'                                  // and much more 
            },
            title: {                                                        // title - specifies the chart title,
                text: 'Income Stats',
                align: 'left',                                              // align, margin, text, x and y position
                style: {
                    color: '#fff'                                                  
                }
            },
            colors: ['#fff'],                                               // color for the line color
            subtitle: {                                                     // subtitle - specifies the chart title,
                text: null                                                  // align, margin, text, x and y position
            },
            xAxis: {                                                        // xAxis - Specifies the highcharts xAxis categories
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',      // and all the styling for the xAxis
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                lineColor: 'transparent',
                minorTickLength: 0,
                tickLength: 0,
                labels: {
                    enabled: false,
                    style: {
                        'color': '#fff'
                    }
                }
            },
            yAxis: {                                                        // yAxis - Styles the yAxis of the chart
                title: {
                    text: null
                },
                // gridLineColor: '#33BCED',
                gridLineColor: 'transparent',
                labels: {
                    enabled: false,
                    style: {
                        'color': '#fff'
                    }
                }
            },
            legend: {                                                       // legend - Enable or disable the legends
                enabled: false                                              // and style the legends
            },
            plotOptions: {                                                  // plotOptions - extra options for the chart
                series: {                                                   // to style all the markers and much more
                    marker: {
                        fillColor: '#0089BA',
                        lineWidth: 2,
                        lineColor: null, // inherit from series
                        radius: 7
                    }
                }
            },
            exporting: {                                                    // exporting - enable or disable the charts option
                enabled: false                                              // for exporting
            },
            series: [{                                                      // series - number of series for the chart and the
                name: 'Income',                                             // data for the chart
                data: [74,82,80,98,87,90,79,69,81,99,85,90]
            }]
        });
    };

    /* ------------------------- 
        End Income  Widget
     ------------------------- */


    /* ------------------------- 
        Begin Realtime Widget
     ------------------------- */

    var initRickshawChart = function() {
        // Variables
        var seriesData = [ [], [], [], [], [], [], [], [], [] ];
        var random = new Rickshaw.Fixtures.RandomData(150);


        // Add random data to seriesData
        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }

        // Draw the graph
        var graph = new Rickshaw.Graph( {
            element: document.getElementById('rickshaw-realtime'),
            renderer: 'area',
            stroke: false,
            preserve: true,
            series: [
                {
                    color: '#f93926',
                    data: seriesData[0],
                    name: 'Moscow'
                }, {
                    color: '#ddd',
                    data: seriesData[1],
                    name: 'Shanghai'
                }
            ]
        } );


        // Render the graph
        graph.render();


        // Update the graph every second
        setInterval( function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();

        }, 1000 );
    };

    /* ------------------------- 
        End Realtime Widget
     ------------------------- */


    /* ------------------------- 
        Begin Dropzone
     ------------------------- */

    var initDropZone = function() {

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

    return {
        init: function() {
            initNotesWidget();
            initBlogPost();
            initIncomeChart();
            initRickshawChart();
            initDropZone();
        }
    }


}());


jQuery(function() { Widgets.init(); });