/* ----------------------------------------------------
 *  Tables
 *
 *  JavaScript file for all the list items in the tables.
 *
 *  Description: Contains codes from jquery.datatables.js, jquery.footable.js
 *  Offical Site: https://datatables.net/
 *  			  https://fooplugins.github.io/FooTable/docs/getting-started.html
 * ---------------------------------------------------- */
 
/*global
    jQuery
*/ 

var Tables = (function($) {

	'use strict';


	
	/* ------------------------- 
        Begin Datatable
     ------------------------- */
	var initDatatable = function() {

		/*
		 * Basic Datatable
		 * ********************************** */
		 
		$('#datatable-basic').dataTable({
			'sDom': '<\'table-responsive\'t><p>',
		});


		/*
		 * Datatable with Search
		 * ********************************** */

		$('#datatable-search').dataTable({
			'sDom': '<\'table-responsive\' <f> t><p>',
		});


		/*
		 * Datatable with Table Tools
		 * ********************************** */

		var tableTools = $('#datatable-tools');

		var tableToolsSettings = {
			'dom': 'T<"clear">lfrtip',
	        'tableTools': {
	            'sSwfPath': 'scripts/plugins/datatables-tabletools/swf/copy_csv_xls_pdf.swf',
	            'aButtons': [{
                    'sExtends': 'copy',
                    'sButtonText': '<i class=\'fa fa-copy\'></i>'
                }, {
                    'sExtends': 'csv',
                    'sButtonText': '<i class=\'fa fa-th-large\'></i>',
                }, {
                    'sExtends': 'xls',
                    'sButtonText': '<i class=\'fa fa-file-excel-o\'></i>',
                }, {
                    'sExtends': 'pdf',
                    'sButtonText': '<i class=\'fa fa-file-pdf-o\'></i>',
                }]
	        },
	        fnDrawCallback: function(oSettings) {
                $('#ToolTables_datatable-tools_0').tooltip({
                    title: 'Copy'
                });

                $('#ToolTables_datatable-tools_1').tooltip({
                    title: 'Export to CSV'
                });

                $('#ToolTables_datatable-tools_2').tooltip({
                    title: 'Export to Excel'
                });

                $('#ToolTables_datatable-tools_3').tooltip({
                    title: 'Export to PDF'
                });
            }
		}
		
		tableTools.dataTable(tableToolsSettings);


		/*
		 * Datatable with Fixed Header
		 * ********************************** */

		$('#datatable-fixedheader').DataTable({
	        fixedHeader: {
	        	header: true
	        }
	        // "iDisplayLength": 20
	    });
	};

	/* ------------------------- 
        End Data Table
     ------------------------- */



    /* ------------------------- 
        Begin FooTable
     ------------------------- */
	
	var initFootable = function() {

		// Initiate Footable
		$('#hiding-columns-example-1').footable({
			'sorting': {
				'enabled': true
			},
			'filtering': {
				'enabled': true
			},
			'paging': {
				'enabled': true
			}
		});
	};

	/* ------------------------- 
        End Footable
     ------------------------- */

	return {

		/**
		 * initTable
		 * Define the plugin name using parameter and case to return the function on the specific page
		 */
		initTable: function($tablePlugin) {
			switch($tablePlugin) {
				case 'data-table': initDatatable();
					break;
				case 'footable': initFootable();
					break;
				default: return false;
			}
		},

		/**
		 * initTables
		 * Use the initTable function and pass the specific function returned using the case statement on the specific page
		 */
		initTables: function($tablePlugins) {
			if ($tablePlugins instanceof Array) {
				for(var $index in $tablePlugins) {
					Tables.initTables($tablePlugins[$index]);
				}
			} else {
				Tables.initTable($tablePlugins);
			}
		}
	}

})(jQuery);