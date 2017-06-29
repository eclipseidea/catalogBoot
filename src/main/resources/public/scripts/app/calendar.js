/* ----------------------------------------------------
 *  Calendar
 *
 *  JavaScript file for app.calendar.html
 *  
 *  Description: Codes for the app.calendar.html, contains the demo.
 *    for fulLCalendar
 *  Official Docs: https://fullcalendar.io/
 * ---------------------------------------------------- */

 /*global
    jQuery
*/

(function($) {
	'use strict';


	// Full Calendar Initialization
	$('#calendar').fullCalendar({

		// Header for the calendar
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'today,month,agendaWeek,agendaDay'
		},
		buttonText: {
			today: 'today',
			month: 'month',
			week: 'week',
			day: 'day'
		},
		selectable: true,
		selectHelper: true,

		// Select function to fire the modal
		// for a new event
		select: function() {
			// Trigger the modal when clicked
			$('#new-event-modal').modal('show');

			// Date Format to a easily readable one
			$.fn.datepicker.defaults.format = 'mm-dd-yyyy';

			// Initiate the datepicker inside the modal
			$('#newEventStart').datepicker();
			$('#newEventEnd').datepicker();
		},

		// Event Click function to fire the modal
		// to edit the current events
		eventClick: function(event) {

			var eventName = $('#editEventName'),
				eventStart = $('#editEventStart'),
				eventEnd = $('#editEventEnd');

				// Grab the event name
				eventName.val(event.title);

				// Format the date
				$.fn.datepicker.defaults.format = 'mm-dd-yyyy';


				// If statement to update the calendar with the
				// selected event date
				event.start ? eventStart.datepicker('update', new Date(event.start)) :
					eventStart.datepicker('update', '');

				event.end ? eventEnd.datepicker('update', new Date(event.end)) :
					eventEnd.datepicker('update', '');

			// Show the modal through javascript when clicked
			$('#event-click-modal').modal('show').on('hidden.bs.modal', function() {

				// Set the event title
				event.title = eventName.val();

				// Set the event start and end date
				event.start = new Date(eventStart.data('datepicker').getDate());
				event.end = new Date(eventEnd.data('datepicker').getDate());

				// Update Event through the updateEvent from fullCalendar
				$('#calendar').fullCalendar('updateEvent', event);
			});

			// Add the input filled class for the input
			$('.form-group-default input').each(function() {
				if($(this).val() !== '') {
					$(this).parent().addClass('input--filled');
				}
			});

		},
		editable: true,
		defaultDate: '2017-03-12',
		eventLimit: true, // allow "more" link when too many events

		// Events Array
		events: [
			{
				title: 'All Day Event',
				start: '2017-03-01'
			},
			{
				title: 'Long Event',
				start: '2017-03-07',
				end: '2017-03-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2017-03-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2017-03-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2017-03-11',
				end: '2017-03-13'
			},
			{
				title: 'Meeting',
				start: '2017-03-12T10:30:00',
				end: '2017-03-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2017-03-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2017-03-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2017-03-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2017-03-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2017-03-13T07:00:00'
			}
		]
	});

})(jQuery);