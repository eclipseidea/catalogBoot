/* ----------------------------------------------------
 *	Highcharts
 *    
 *  JavaScript file for all the items in the highcharts menu
 *  
 *	Description: Contains codes for all the list items in the 
 *     highcharts menu.
 *  Official Docs: http://www.highcharts.com/docs
 * ---------------------------------------------------- */

/*global
    jQuery,
    Highcharts
*/

'use strict';

// Main Highcharts Object
var HighCharts = (function() {

    /* ------------------------- 
        Begin Line Chart
     ------------------------- */
    var initLineChart = function() {

        // Basic Line Chart
        jQuery('#highcharts-line').highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            chart: {
                backgroundColor: 'transparent'
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });


        // Line Chart with Data Labels
        jQuery('#highcharts-line-datalabels').highcharts({
            chart: {
                type: 'line',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });


        // Line Chart with smooth curves
        jQuery('#highcharts-spline').highcharts({
            chart: {
                type: 'spline',
                inverted: true,
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Atmosphere Temperature by Altitude'
            },
            subtitle: {
                text: 'According to the Standard Atmosphere Model'
            },
            xAxis: {
                reversed: false,
                title: {
                    enabled: true,
                    text: 'Altitude'
                },
                labels: {
                    formatter: function () {
                        return this.value + 'km';
                    }
                },
                maxPadding: 0.05,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                },
                lineWidth: 2
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x} km: {point.y}°C'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                }
            },
            series: [{
                name: 'Temperature',
                data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                    [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
            }]
        });

    };

    /* ------------------------- 
        End Line Chart
     ------------------------- */


    /* ------------------------- 
        Begin Area Chart
     ------------------------- */

    var initAreaChart = function() {

        // Basic Area Chart
        jQuery('#highcharts-area').highcharts({
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'US and USSR nuclear stockpiles'
            },
            subtitle: {
                text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                    'thebulletin.metapress.com</a>'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Nuclear weapon states'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'USA',
                data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                    26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                    22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                    10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
            }, {
                name: 'USSR/Russia',
                data: [null, null, null, null, null, null, null, null, null, null,
                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                    4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                    15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                    33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                    35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                    21000, 20000, 19000, 18000, 18000, 17000, 16000]
            }]
        });


        // Stacked Area Chart
        jQuery('#highcharts-stacked-area').highcharts({
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Growth by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Billions'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]

        });


        // 100% Stacked Area Chart
        jQuery('#highcharts-percentage-area').highcharts({
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]

        });


        // Zoomable Area Chart
        jQuery('#highcharts-zoomable-area').highcharts({
            chart: {
                zoomType: 'x',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'USD to EUR exchange rate from 2006 through 2008'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' :
                        'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: 14 * 24 * 3600000 // fourteen days
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2006, 0, 1),
                data: [
                    0.8446, 0.8445, 0.8444, 0.8451,    0.8418, 0.8264,    0.8258, 0.8232,    0.8233, 0.8258,
                    0.8283, 0.8278, 0.8256, 0.8292,    0.8239, 0.8239,    0.8245, 0.8265,    0.8261, 0.8269,
                    0.8273, 0.8244, 0.8244, 0.8172,    0.8139, 0.8146,    0.8164, 0.82,    0.8269, 0.8269,
                    0.8269, 0.8258, 0.8247, 0.8286,    0.8289, 0.8316,    0.832, 0.8333,    0.8352, 0.8357,
                    0.8355, 0.8354, 0.8403, 0.8403,    0.8406, 0.8403,    0.8396, 0.8418,    0.8409, 0.8384,
                    0.8386, 0.8372, 0.839, 0.84, 0.8389, 0.84, 0.8423, 0.8423, 0.8435, 0.8422,
                    0.838, 0.8373, 0.8316, 0.8303,    0.8303, 0.8302,    0.8369, 0.84, 0.8385, 0.84,
                    0.8401, 0.8402, 0.8381, 0.8351,    0.8314, 0.8273,    0.8213, 0.8207,    0.8207, 0.8215,
                    0.8242, 0.8273, 0.8301, 0.8346,    0.8312, 0.8312,    0.8312, 0.8306,    0.8327, 0.8282,
                    0.824, 0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149, 0.8213, 0.8273, 0.8273,
                    0.8261, 0.8252, 0.824, 0.8262, 0.8258, 0.8261, 0.826, 0.8199, 0.8153, 0.8097,
                    0.8101, 0.8119, 0.8107, 0.8105,    0.8084, 0.8069,    0.8047, 0.8023,    0.7965, 0.7919,
                    0.7921, 0.7922, 0.7934, 0.7918,    0.7915, 0.787, 0.7861, 0.7861, 0.7853, 0.7867,
                    0.7827, 0.7834, 0.7766, 0.7751, 0.7739, 0.7767, 0.7802, 0.7788, 0.7828, 0.7816,
                    0.7829, 0.783, 0.7829, 0.7781, 0.7811, 0.7831, 0.7826, 0.7855, 0.7855, 0.7845,
                    0.7798, 0.7777, 0.7822, 0.7785, 0.7744, 0.7743, 0.7726, 0.7766, 0.7806, 0.785,
                    0.7907, 0.7912, 0.7913, 0.7931, 0.7952, 0.7951, 0.7928, 0.791, 0.7913, 0.7912,
                    0.7941, 0.7953, 0.7921, 0.7919, 0.7968, 0.7999, 0.7999, 0.7974, 0.7942, 0.796,
                    0.7969, 0.7862, 0.7821, 0.7821, 0.7821, 0.7811, 0.7833, 0.7849, 0.7819, 0.7809,
                    0.7809, 0.7827, 0.7848, 0.785, 0.7873, 0.7894, 0.7907, 0.7909, 0.7947, 0.7987,
                    0.799, 0.7927, 0.79, 0.7878, 0.7878, 0.7907, 0.7922, 0.7937, 0.786, 0.787,
                    0.7838, 0.7838, 0.7837, 0.7836, 0.7806, 0.7825, 0.7798, 0.777, 0.777, 0.7772,
                    0.7793, 0.7788, 0.7785, 0.7832, 0.7865, 0.7865, 0.7853, 0.7847, 0.7809, 0.778,
                    0.7799, 0.78, 0.7801, 0.7765, 0.7785, 0.7811, 0.782, 0.7835, 0.7845, 0.7844,
                    0.782, 0.7811, 0.7795, 0.7794, 0.7806, 0.7794, 0.7794, 0.7778, 0.7793, 0.7808,
                    0.7824, 0.787, 0.7894, 0.7893, 0.7882, 0.7871, 0.7882, 0.7871, 0.7878, 0.79,
                    0.7901, 0.7898, 0.7879, 0.7886, 0.7858, 0.7814, 0.7825, 0.7826, 0.7826, 0.786,
                    0.7878, 0.7868, 0.7883, 0.7893, 0.7892, 0.7876, 0.785, 0.787, 0.7873, 0.7901,
                    0.7936, 0.7939, 0.7938, 0.7956, 0.7975, 0.7978, 0.7972, 0.7995, 0.7995, 0.7994,
                    0.7976, 0.7977, 0.796, 0.7922, 0.7928, 0.7929, 0.7948, 0.797, 0.7953, 0.7907,
                    0.7872, 0.7852, 0.7852, 0.786, 0.7862, 0.7836, 0.7837, 0.784, 0.7867, 0.7867,
                    0.7869, 0.7837, 0.7827, 0.7825, 0.7779, 0.7791, 0.779, 0.7787, 0.78, 0.7807,
                    0.7803, 0.7817, 0.7799, 0.7799, 0.7795, 0.7801, 0.7765, 0.7725, 0.7683, 0.7641,
                    0.7639, 0.7616, 0.7608, 0.759, 0.7582, 0.7539, 0.75, 0.75, 0.7507, 0.7505,
                    0.7516, 0.7522, 0.7531, 0.7577, 0.7577, 0.7582, 0.755, 0.7542, 0.7576, 0.7616,
                    0.7648, 0.7648, 0.7641, 0.7614, 0.757, 0.7587, 0.7588, 0.762, 0.762, 0.7617,
                    0.7618, 0.7615, 0.7612, 0.7596, 0.758, 0.758, 0.758, 0.7547, 0.7549, 0.7613,
                    0.7655, 0.7693, 0.7694, 0.7688, 0.7678, 0.7708, 0.7727, 0.7749, 0.7741, 0.7741,
                    0.7732, 0.7727, 0.7737, 0.7724, 0.7712, 0.772, 0.7721, 0.7717, 0.7704, 0.769,
                    0.7711, 0.774, 0.7745, 0.7745, 0.774, 0.7716, 0.7713, 0.7678, 0.7688, 0.7718,
                    0.7718, 0.7728, 0.7729, 0.7698, 0.7685, 0.7681, 0.769, 0.769, 0.7698, 0.7699,
                    0.7651, 0.7613, 0.7616, 0.7614, 0.7614, 0.7607, 0.7602, 0.7611, 0.7622, 0.7615,
                    0.7598, 0.7598, 0.7592, 0.7573, 0.7566, 0.7567, 0.7591, 0.7582, 0.7585, 0.7613,
                    0.7631, 0.7615, 0.76, 0.7613, 0.7627, 0.7627, 0.7608, 0.7583, 0.7575, 0.7562,
                    0.752, 0.7512, 0.7512, 0.7517, 0.752, 0.7511, 0.748, 0.7509, 0.7531, 0.7531,
                    0.7527, 0.7498, 0.7493, 0.7504, 0.75, 0.7491, 0.7491, 0.7485, 0.7484, 0.7492,
                    0.7471, 0.7459, 0.7477, 0.7477, 0.7483, 0.7458, 0.7448, 0.743, 0.7399, 0.7395,
                    0.7395, 0.7378, 0.7382, 0.7362, 0.7355, 0.7348, 0.7361, 0.7361, 0.7365, 0.7362,
                    0.7331, 0.7339, 0.7344, 0.7327, 0.7327, 0.7336, 0.7333, 0.7359, 0.7359, 0.7372,
                    0.736, 0.736, 0.735, 0.7365, 0.7384, 0.7395, 0.7413, 0.7397, 0.7396, 0.7385,
                    0.7378, 0.7366, 0.74, 0.7411, 0.7406, 0.7405, 0.7414, 0.7431, 0.7431, 0.7438,
                    0.7443, 0.7443, 0.7443, 0.7434, 0.7429, 0.7442, 0.744, 0.7439, 0.7437, 0.7437,
                    0.7429, 0.7403, 0.7399, 0.7418, 0.7468, 0.748, 0.748, 0.749, 0.7494, 0.7522,
                    0.7515, 0.7502, 0.7472, 0.7472, 0.7462, 0.7455, 0.7449, 0.7467, 0.7458, 0.7427,
                    0.7427, 0.743, 0.7429, 0.744, 0.743, 0.7422, 0.7388, 0.7388, 0.7369, 0.7345,
                    0.7345, 0.7345, 0.7352, 0.7341, 0.7341, 0.734, 0.7324, 0.7272, 0.7264, 0.7255,
                    0.7258, 0.7258, 0.7256, 0.7257, 0.7247, 0.7243, 0.7244, 0.7235, 0.7235, 0.7235,
                    0.7235, 0.7262, 0.7288, 0.7301, 0.7337, 0.7337, 0.7324, 0.7297, 0.7317, 0.7315,
                    0.7288, 0.7263, 0.7263, 0.7242, 0.7253, 0.7264, 0.727, 0.7312, 0.7305, 0.7305,
                    0.7318, 0.7358, 0.7409, 0.7454, 0.7437, 0.7424, 0.7424, 0.7415, 0.7419, 0.7414,
                    0.7377, 0.7355, 0.7315, 0.7315, 0.732, 0.7332, 0.7346, 0.7328, 0.7323, 0.734,
                    0.734, 0.7336, 0.7351, 0.7346, 0.7321, 0.7294, 0.7266, 0.7266, 0.7254, 0.7242,
                    0.7213, 0.7197, 0.7209, 0.721, 0.721, 0.721, 0.7209, 0.7159, 0.7133, 0.7105,
                    0.7099, 0.7099, 0.7093, 0.7093, 0.7076, 0.707, 0.7049, 0.7012, 0.7011, 0.7019,
                    0.7046, 0.7063, 0.7089, 0.7077, 0.7077, 0.7077, 0.7091, 0.7118, 0.7079, 0.7053,
                    0.705, 0.7055, 0.7055, 0.7045, 0.7051, 0.7051, 0.7017, 0.7, 0.6995, 0.6994,
                    0.7014, 0.7036, 0.7021, 0.7002, 0.6967, 0.695, 0.695, 0.6939, 0.694, 0.6922,
                    0.6919, 0.6914, 0.6894, 0.6891, 0.6904, 0.689, 0.6834, 0.6823, 0.6807, 0.6815,
                    0.6815, 0.6847, 0.6859, 0.6822, 0.6827, 0.6837, 0.6823, 0.6822, 0.6822, 0.6792,
                    0.6746, 0.6735, 0.6731, 0.6742, 0.6744, 0.6739, 0.6731, 0.6761, 0.6761, 0.6785,
                    0.6818, 0.6836, 0.6823, 0.6805, 0.6793, 0.6849, 0.6833, 0.6825, 0.6825, 0.6816,
                    0.6799, 0.6813, 0.6809, 0.6868, 0.6933, 0.6933, 0.6945, 0.6944, 0.6946, 0.6964,
                    0.6965, 0.6956, 0.6956, 0.695, 0.6948, 0.6928, 0.6887, 0.6824, 0.6794, 0.6794,
                    0.6803, 0.6855, 0.6824, 0.6791, 0.6783, 0.6785, 0.6785, 0.6797, 0.68, 0.6803,
                    0.6805, 0.676, 0.677, 0.677, 0.6736, 0.6726, 0.6764, 0.6821, 0.6831, 0.6842,
                    0.6842, 0.6887, 0.6903, 0.6848, 0.6824, 0.6788, 0.6814, 0.6814, 0.6797, 0.6769,
                    0.6765, 0.6733, 0.6729, 0.6758, 0.6758, 0.675, 0.678, 0.6833, 0.6856, 0.6903,
                    0.6896, 0.6896, 0.6882, 0.6879, 0.6862, 0.6852, 0.6823, 0.6813, 0.6813, 0.6822,
                    0.6802, 0.6802, 0.6784, 0.6748, 0.6747, 0.6747, 0.6748, 0.6733, 0.665, 0.6611,
                    0.6583, 0.659, 0.659, 0.6581, 0.6578, 0.6574, 0.6532, 0.6502, 0.6514, 0.6514,
                    0.6507, 0.651, 0.6489, 0.6424, 0.6406, 0.6382, 0.6382, 0.6341, 0.6344, 0.6378,
                    0.6439, 0.6478, 0.6481, 0.6481, 0.6494, 0.6438, 0.6377, 0.6329, 0.6336, 0.6333,
                    0.6333, 0.633, 0.6371, 0.6403, 0.6396, 0.6364, 0.6356, 0.6356, 0.6368, 0.6357,
                    0.6354, 0.632, 0.6332, 0.6328, 0.6331, 0.6342, 0.6321, 0.6302, 0.6278, 0.6308,
                    0.6324, 0.6324, 0.6307, 0.6277, 0.6269, 0.6335, 0.6392, 0.64, 0.6401, 0.6396,
                    0.6407, 0.6423, 0.6429, 0.6472, 0.6485, 0.6486, 0.6467, 0.6444, 0.6467, 0.6509,
                    0.6478, 0.6461, 0.6461, 0.6468, 0.6449, 0.647, 0.6461, 0.6452, 0.6422, 0.6422,
                    0.6425, 0.6414, 0.6366, 0.6346, 0.635, 0.6346, 0.6346, 0.6343, 0.6346, 0.6379,
                    0.6416, 0.6442, 0.6431, 0.6431, 0.6435, 0.644, 0.6473, 0.6469, 0.6386, 0.6356,
                    0.634, 0.6346, 0.643, 0.6452, 0.6467, 0.6506, 0.6504, 0.6503, 0.6481, 0.6451,
                    0.645, 0.6441, 0.6414, 0.6409, 0.6409, 0.6428, 0.6431, 0.6418, 0.6371, 0.6349,
                    0.6333, 0.6334, 0.6338, 0.6342, 0.632, 0.6318, 0.637, 0.6368, 0.6368, 0.6383,
                    0.6371, 0.6371, 0.6355, 0.632, 0.6277, 0.6276, 0.6291, 0.6274, 0.6293, 0.6311,
                    0.631, 0.6312, 0.6312, 0.6304, 0.6294, 0.6348, 0.6378, 0.6368, 0.6368, 0.6368,
                    0.636, 0.637, 0.6418, 0.6411, 0.6435, 0.6427, 0.6427, 0.6419, 0.6446, 0.6468,
                    0.6487, 0.6594, 0.6666, 0.6666, 0.6678, 0.6712, 0.6705, 0.6718, 0.6784, 0.6811,
                    0.6811, 0.6794, 0.6804, 0.6781, 0.6756, 0.6735, 0.6763, 0.6762, 0.6777, 0.6815,
                    0.6802, 0.678, 0.6796, 0.6817, 0.6817, 0.6832, 0.6877, 0.6912, 0.6914, 0.7009,
                    0.7012, 0.701, 0.7005, 0.7076, 0.7087, 0.717, 0.7105, 0.7031, 0.7029, 0.7006,
                    0.7035, 0.7045, 0.6956, 0.6988, 0.6915, 0.6914, 0.6859, 0.6778, 0.6815, 0.6815,
                    0.6843, 0.6846, 0.6846, 0.6923, 0.6997, 0.7098, 0.7188, 0.7232, 0.7262, 0.7266,
                    0.7359, 0.7368, 0.7337, 0.7317, 0.7387, 0.7467, 0.7461, 0.7366, 0.7319, 0.7361,
                    0.7437, 0.7432, 0.7461, 0.7461, 0.7454, 0.7549, 0.7742, 0.7801, 0.7903, 0.7876,
                    0.7928, 0.7991, 0.8007, 0.7823, 0.7661, 0.785, 0.7863, 0.7862, 0.7821, 0.7858,
                    0.7731, 0.7779, 0.7844, 0.7866, 0.7864, 0.7788, 0.7875, 0.7971, 0.8004, 0.7857,
                    0.7932, 0.7938, 0.7927, 0.7918, 0.7919, 0.7989, 0.7988, 0.7949, 0.7948, 0.7882,
                    0.7745, 0.771, 0.775, 0.7791, 0.7882, 0.7882, 0.7899, 0.7905, 0.7889, 0.7879,
                    0.7855, 0.7866, 0.7865, 0.7795, 0.7758, 0.7717, 0.761, 0.7497, 0.7471, 0.7473,
                    0.7407, 0.7288, 0.7074, 0.6927, 0.7083, 0.7191, 0.719, 0.7153, 0.7156, 0.7158,
                    0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095
                ]
            }]
        });
        

        // Area chart with Missing Area
        jQuery('#highcharts-missing-area').highcharts({
            chart: {
                type: 'area',
                spacingBottom: 30,
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Fruit consumption *'
            },
            subtitle: {
                text: '* Jane\'s banana consumption is unknown',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
            },
            yAxis: {
                title: {
                    text: 'Y-Axis'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y;
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [0, 1, 4, 4, 5, 2, 3, 7]
            }, {
                name: 'Jane',
                data: [1, 0, 3, null, 3, 1, 2, 1]
            }]
        });
    };

    /* ------------------------- 
        End Area Chart
     ------------------------- */



    /* ------------------------- 
        Begin Bar Chart
    ------------------------- */

    var initBarChart = function() {
        // Basic Bar Chart
        jQuery('#highcharts-bar').highcharts({
            chart: {
                type: 'bar',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2]
            }, {
                name: 'Year 1900',
                data: [133, 156, 947, 408, 6]
            }, {
                name: 'Year 2008',
                data: [973, 914, 4054, 732, 34]
            }]
        });


        // Stacked Bar Chart
        jQuery('#highcharts-stacked-bar').highcharts({
            chart: {
                type: 'bar',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        });


        // Column Chart
        jQuery('#highcharts-column').highcharts({
            chart: {
                type: 'column',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

            }]
        });


        // Stacked Column
        jQuery('#highcharts-stacked-column').highcharts({
            chart: {
                type: 'column',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        });


        // Column with rotate labels
        jQuery('#highcharts-column-rotated-labels').highcharts({
            chart: {
                type: 'column',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'World\'s largest cities per 2014'
            },
            subtitle: {
                text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
            },
            series: [{
                name: 'Population',
                data: [
                    ['Shanghai', 23.7],
                    ['Lagos', 16.1],
                    ['Instanbul', 14.2],
                    ['Karachi', 14.0],
                    ['Mumbai', 12.5],
                    ['Moscow', 12.1],
                    ['São Paulo', 11.8],
                    ['Beijing', 11.7],
                    ['Guangzhou', 11.1],
                    ['Delhi', 11.1],
                    ['Shenzhen', 10.5],
                    ['Seoul', 10.4],
                    ['Jakarta', 10.0],
                    ['Kinshasa', 9.3],
                    ['Tianjin', 9.3],
                    ['Tokyo', 9.0],
                    ['Cairo', 8.9],
                    ['Dhaka', 8.9],
                    ['Mexico City', 8.9],
                    ['Lima', 8.9]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
        });
    };

    /* ------------------------- 
        End Bar Chart
    ------------------------- */



    /* ------------------------- 
        Begin Pie Chart
    ------------------------- */

    var initPieChart = function() {
        // Basic Pie
        jQuery('#highcharts-pie').highcharts({
            chart: {
                plotBackgroundColor: null,
                // plotBorderWidth: 1,//null,
                plotShadow: false,
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        });


        // Pie with Legends
        jQuery('#highcharts-pie-legend').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        });


        // Colors, Categories and Data
        var colors = Highcharts.getOptions().colors,
        categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
        data = [{
            y: 55.11,
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
                data: [10.85, 7.35, 33.06, 2.81],
                color: colors[0]
            }
        }, {
            y: 21.63,
            color: colors[1],
            drilldown: {
                name: 'Firefox versions',
                categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
                data: [0.20, 0.83, 1.58, 13.12, 5.43],
                color: colors[1]
            }
        }, {
            y: 11.94,
            color: colors[2],
            drilldown: {
                name: 'Chrome versions',
                categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                    'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
                data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
                color: colors[2]
            }
        }, {
            y: 7.15,
            color: colors[3],
            drilldown: {
                name: 'Safari versions',
                categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                    'Safari 3.1', 'Safari 4.1'],
                data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
                color: colors[3]
            }
        }, {
            y: 2.14,
            color: colors[4],
            drilldown: {
                name: 'Opera versions',
                categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
                data: [ 0.12, 0.37, 1.65],
                color: colors[4]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        // Donut Chart
        jQuery('#highcharts-donut').highcharts({
            chart: {
                type: 'pie',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Browser market share, April, 2011'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Versions',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;
                    }
                }
            }]
        });


        // Semi Circle Donut Chart
        jQuery('#highcharts-semi-circle-donut').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Browser<br>shares',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    ['Chrome', 12.8],
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    {
                        name: 'Others',
                        y: 0.7,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        });
    };

    /* ------------------------- 
        End Pie Chart
    ------------------------- */




    /* ------------------------- 
        Begin Scatter Chart
    ------------------------- */
    var initScatterPlot = function() {
        // Scatter Plot Chart
        jQuery('#highcharts-scatter-plot').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },
            title: {
                text: 'Height Versus Weight of 507 Individuals by Gender'
            },
            subtitle: {
                text: 'Source: Heinz  2003'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Height (cm)'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} cm, {point.y} kg'
                    }
                }
            },
            series: [{
                name: 'Female',
                color: 'rgba(223, 83, 83, .5)',
                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                    [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                    [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                    [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                    [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                    [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                    [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                    [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                    [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                    [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                    [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                    [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                    [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                    [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                    [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                    [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                    [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                    [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                    [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                    [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                    [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                    [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                    [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                    [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                    [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                    [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                    [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                    [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                    [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                    [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                    [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                    [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                    [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

            }, {
                name: 'Male',
                color: 'rgba(119, 152, 191, .5)',
                data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                    [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                    [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                    [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                    [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                    [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                    [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                    [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                    [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                    [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                    [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                    [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                    [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                    [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                    [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                    [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                    [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                    [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                    [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                    [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                    [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                    [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                    [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                    [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                    [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                    [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                    [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                    [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                    [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                    [180.3, 83.2], [180.3, 83.2]]
            }]
        });
        

        // Bubble Chart
        jQuery('#highcharts-bubble-chart').highcharts({
            chart: {
                type: 'bubble',
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },

            title: {
                text: 'Highcharts Bubbles'
            },

            series: [{
                data: [[97, 36, 79], [94, 74, 60], [68, 76, 58], [64, 87, 56], [68, 27, 73], [74, 99, 42], [7, 93, 87], [51, 69, 40], [38, 23, 33], [57, 86, 31]]
            }, {
                data: [[25, 10, 87], [2, 75, 59], [11, 54, 8], [86, 55, 93], [5, 3, 58], [90, 63, 44], [91, 33, 17], [97, 3, 56], [15, 67, 48], [54, 25, 81]]
            }, {
                data: [[47, 47, 21], [20, 12, 4], [6, 76, 91], [38, 30, 60], [57, 98, 64], [61, 17, 80], [83, 60, 13], [67, 78, 75], [64, 12, 10], [30, 77, 82]]
            }]
        });


        // Bubble Radiant Fill
        jQuery('#highcharts-bubble-radiant-fill').highcharts({
            chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy',
                backgroundColor: 'transparent'
            },

            title: {
                text: 'Highcharts bubbles with radial gradient fill'
            },

            xAxis: {
                gridLineWidth: 1
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false
            },

            series: [{
                data: [
                    [9, 81, 63],
                    [98, 5, 89],
                    [51, 50, 73],
                    [41, 22, 14],
                    [58, 24, 20],
                    [78, 37, 34],
                    [55, 56, 53],
                    [18, 45, 70],
                    [42, 44, 28],
                    [3, 52, 59],
                    [31, 18, 97],
                    [79, 91, 63],
                    [93, 23, 23],
                    [44, 83, 22]
                ],
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
                        ]
                    }
                }
            }, {
                data: [
                    [42, 38, 20],
                    [6, 18, 1],
                    [1, 93, 55],
                    [57, 2, 90],
                    [80, 76, 22],
                    [11, 74, 96],
                    [88, 56, 10],
                    [30, 47, 49],
                    [57, 62, 98],
                    [4, 16, 16],
                    [46, 10, 11],
                    [22, 87, 89],
                    [57, 91, 82],
                    [45, 15, 98]
                ],
                marker: {
                    fillColor: {
                        radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
                        ]
                    }
                }
            }]
        });
    };


    // Return all the function under init object
    return {
        Init: function() {
            initLineChart();    
            initAreaChart();    
            initBarChart();    
            initPieChart();    
            initScatterPlot();    
        }
    };
})();


// Initialize highcharts
jQuery(function() { HighCharts.Init(); });