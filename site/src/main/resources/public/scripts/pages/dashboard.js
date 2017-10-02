/* ----------------------------------------------------
 *	Dashboard
 *
 * 	JavaScript file for the index page.
 * 	Uses NVD3
 * 		 Highcharts
 * 		 easyPieChart
 * 		 Mapeal
 * 		 Sparkline
 * 		 Rickshaw
 * 	libraries to create the graphs for the dashboard
 * ---------------------------------------------------- */

/*global
	jQuery
*/

'use strict';

// Main Dashboard Obkect
var Dashboard = (function() {


	/* ------------------------- 
        Begin Bar Chart
     ------------------------- */

	var initHistBarChart = function() {
		// Data for bar chart
		var historicalBarChart = [
	        {
	            key: 'Cumulative Return',
	            values: [
	                {
	                    'label' : 'A' ,
	                    'value' : 29.765957771107
	                } ,
	                {
	                    'label' : 'B' ,
	                    'value' : 0
	                } ,
	                {
	                    'label' : 'C' ,
	                    'value' : 32.807804682612
	                } ,
	                {
	                    'label' : 'D' ,
	                    'value' : 196.45946739256
	                } ,
	                {
	                    'label' : 'E' ,
	                    'value' : 0.19434030906893
	                } ,
	                {
	                    'label' : 'F' ,
	                    'value' : 98.079782601442
	                } ,
	                {
	                    'label' : 'G' ,
	                    'value' : 13.925743130903
	                } ,
	                {
	                    'label' : 'H' ,
	                    'value' : 5.1387322875705
	                }
	            ]
	        }
	    ];


	    // Initiate the graph
	    nv.addGraph(function() {
	        var chart = nv.models.discreteBarChart()
	            .x(function(d) { return d.label })
	            .y(function(d) { return d.value })
	            .staggerLabels(true)
	            //.staggerLabels(historicalBarChart[0].values.length > 8)
	            .showValues(true)
	            // .showYAxis(true)
	            .duration(250)
	            .color(['#27c24c'])
	            .valueFormat(d3.format('.0f'))
	            ;
	        d3.select('#discrete-bar-chart svg')
	            .datum(historicalBarChart)
	            .call(chart);
	        nv.utils.windowResize(chart.update);

	        chart
	        	.yAxis
	        	.tickFormat(d3.format('.0f'))
	        return chart;
	    });
	};

	/* ------------------------- 
        End Bar Chart
     ------------------------- */



    /* ------------------------- 
        Begin Visitor Stats Chart
     ------------------------- */

	var initHighCharts = function() {
		// Chart Initiate
		jQuery('.visitor-stats').highcharts({
	        chart: {
	            height: 300,
	            backgroundColor: 'transparent'
	        },
	        title: {
	            text: null
	        },
	        colors: ['#27c24c', '#000'],
	        subtitle: {
	            text: null
	        },
	        xAxis: {
	            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				lineColor: 'transparent',
	            minorTickLength: 0,
	            tickLength: 0
	        },
	        yAxis: {
	            title: {
	                text: null
	            },
	            gridLineColor: '#e8e8e8'
	        },
	        legend: {
	            enabled: false
	        },
	        plotOptions: {
	            series: {
	                marker: {
	                    fillColor: '#FFFFFF',
	                    lineWidth: 5,
	                    lineColor: null, // inherit from series
	                    radius: 10
	                },
	                lineWidth: 7
	            }
	        },
	        exporting: {
	            enabled: false
	        },
	        series: [{
	            name: 'Views',
	            data: [74,82,80,98,87,90,79,69,81,99,85,90]
	        }]
	    });
	};

	/* ------------------------- 
        End Visitor Stats Chart
     ------------------------- */


    /* ------------------------- 
        Begin Pie Charts
     ------------------------- */
	var initEasyPieChart = function() {

		// Pie Chart 1
		jQuery('.pie-chart1-dashboard').easyPieChart({
	        animate: 1000,
	        size: 175,
	        lineWidth: 8,
	        barColor: '#00abe8',
	        scaleColor: '#fff',
	        trackColor: '#eee'
	    });


		// Pie Chart 2
	    jQuery('.pie-chart2-dashboard').easyPieChart({
	        animate: 1000,
	        size: 175,
	        lineWidth: 8,
	        barColor: '#f93926',
	        scaleColor: '#fff',
	        trackColor: '#eee'
	    });


	    // Pie Chart 3
	    jQuery('.pie-chart3-dashboard').easyPieChart({
	        animate: 1000,
	        size: 175,
	        lineWidth: 8,
	        barColor: '#27c24c',
	        scaleColor: '#fff',
	        trackColor: '#eee'
	    });


	    // Pie Chart 4
	    jQuery('.pie-chart4-dashboard').easyPieChart({
	        animate: 1000,
	        size: 175,
	        lineWidth: 8,
	        barColor: '#ff9c00',
	        scaleColor: '#fff',
	        trackColor: '#eee'
	    });
	};

	/* ------------------------- 
        End Pie Charts
     ------------------------- */



    /* ------------------------- 
        Begin Map
     ------------------------- */

	var initMapeal = function() {
		// Initiate Map 
		jQuery('#dashboard-map').mapael({
			// Map Codes
            map: {
                name: 'usa_states',
                defaultArea: {
                    attrs: {
                        fill: '#343434'
                        , stroke: '#5d5d5d'
                    },
                    attrsHover: {
                        fill: '#242424'
                    }
                },
                defaultPlot: {
                	size: 17,
                        attrs: {
                            fill: '#ff9c00',
                            stroke: '#fff',
                            'stroke-width': 0,
                            'stroke-linejoin': 'round'
                        },
                        attrsHover: {
                            'stroke-width': 1,
                            animDuration: 100
                        }
                }
            },

            // Marker Codes
            plots: {
                'ny': {
                    latitude: 40.717079,
                    longitude: -74.00116,
                    tooltip: {content: 'New York'},
                    size: 32,
                    value: [5000, 20]
                },
                'an': {
                    latitude: 61.2108398,
                    longitude: -149.9019557,
                    size: 19,
                    tooltip: {content: 'Anchorage'},
                    value: [50000, 20]
                },
                'sf': {
                    latitude: 37.792032,
                    longitude: -122.394613,
                    tooltip: {content: 'San Francisco'},
                    size: 10,
                    value: [150000, 20]
                },
                'pa': {
                    latitude: 19.493204,
                    longitude: -154.8199569,
                    tooltip: {content: 'Pahoa'},
                    size: 33,
                    value: [5000, 200]
                },
                'la': {
                    latitude: 34.025052,
                    longitude: -118.192006,
                    tooltip: {content: 'Los Angeles'},
                    size: 25,
                    value: [50000, 200]
                },
                'dallas': {
                    latitude: 32.784881,
                    longitude: -96.808244,
                    tooltip: {content: 'Dallas'},
                    size: 5,
                    value: [150000, 200]
                },
                'miami': {
                    latitude: 25.789125,
                    longitude: -80.205674,
                    tooltip: {content: 'Miami'},
                    size: 10,
                    value: [5000, 2000]
                },
                'washington': {
                    latitude: 38.905761,
                    longitude: -77.020746,
                    tooltip: {content: 'Washington'},
                    size: 36,
                    value: [50000, 2000]
                },
                'seattle': {
                    latitude: 47.599571,
                    longitude: -122.319426,
                    tooltip: {content: 'Seattle'},
                    size: 15,
                    value: [150000, 2000]
                },
                'test1': {
                    latitude: 44.671504,
                    longitude: -110.957968,
                    tooltip: {content: 'Test 1'},
                    size: 20,
                    value: [5000, 2000]
                },
                'test2': {
                    latitude: 40.667013,
                    longitude: -101.465781,
                    tooltip: {content: 'Test 2'},
                    size: 30,
                    value: [50000, 200]
                },
                'test3': {
                    latitude: 38.362031,
                    longitude: -86.875938,
                    tooltip: {content: 'Test 3'},
                    size: 45,
                    value: [150000, 20]
                }
            }
        });
	};

	/* ------------------------- 
        End Map
     ------------------------- */


     /* ------------------------- 
        Begin Real Time Chart
     ------------------------- */

	var initRickShaw = function() {
		// Variables
		var seriesData = [ [], [], [], [], [], [], [], [], [] ];
		var random = new Rickshaw.Fixtures.RandomData(150);

		// Add Random Data to seriesData
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
		});


		// Render the graph
		graph.render();


		// Update for every second
		setInterval( function() {
			random.removeData(seriesData);
			random.addData(seriesData);
			graph.update();

		}, 1000 );
	};

	/* ------------------------- 
        End Real Time Chart
     ------------------------- */



    // Return all the functions under init
	return {
		Init: function() {
			initHistBarChart();
			initHighCharts();
			initEasyPieChart();
			initMapeal();
			initRickShaw();
		}
	};
})(); 

// Initiate the Dashboard
jQuery(function() { Dashboard.Init(); });