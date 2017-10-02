/* ----------------------------------------------------
 *  Notification
 *
 *  JavaScript file for the ui.notificaion.html.
 *
 *  Description: Notification plugin is exclusively for
 *  	XPLOIT.
 * ---------------------------------------------------- */

/*global
	jQuery
*/

(function($, window, document, undefined) {

	'use strict';


	// Main Notification Object
	var Notification = function(element, options) {
		var self = this;

		self.ele = element;
		self.$ele = $(element);


		// Extend or Overwrite the defaults options
		self.options = $.fn.extend({}, $.fn.notify.defaults, options);


		// Check if the notification container for the specific position is available
		// if so use it else create a new one
		if($('.notify-container[data-position="' + self.options.position + '"]').length) {
			self.container = self.$ele.find('.notify-container[data-position="' + self.options.position + '"]');
		} else {
			self.container = $('<div class="notify-container" ' +
								'data-position="' + self.options.position + '">' +
							'</div>');

			self.$ele
				.append(self.container);
		}


		// If the type of the notification is thumb or thumb circle
		// returnt he html without the stype attribute
		// otherwise return the html with the style attribute
		if(self.options.type == 'thumb' || self.options.type == 'thumb-circle') {
			self.wrapper = $('<div class="notify-wrapper" ' +
								'data-type="' + self.options.type + '">' +
							'</div>');
		} else {
			self.wrapper = $('<div class="notify-wrapper" ' +
								'data-style="' + self.options.style + '" ' +
								'data-type="' + self.options.type + '">' +
							'</div>');
		}


		// Store the close buttons
		self.closeButton = $('<i class="pe-7s-close fa-2x notify-close-button"></i>');


		// Append the close button
		self.wrapper
			.append(self.closeButton);

		// Initiate the notification
		self.init();
	};


	// Init function for the notification
	Notification.prototype.init = function() {
		var self = this;


		// Return new notification based on the
		// type selected or given
		switch(self.options.type) {
			case 'thumb' :
				new NotifyThumb();
				break;
			case 'thumb-circle' :
				new NotifyThumbCircle();
				break;
			case 'alert' :
				new NotifyAlert();
				break;
			case 'simple' :
				new NotifySimple();
				break;
			case 'flip' :
				new NotifyFlip();
				break;
			case 'bar' :
				new NotifyBar();
				break;
		}


		// Thumb Notification
		function NotifyThumb() {

			var thumbContainer = $('<div class="thumb--container"></div>');
			var thumbImage = $('<div class="thumb--image">' +
									'<img src="' + self.options.imgSource + '">' +
								'</div>');
			var thumbMessage = $('<div class="thumb--message">' +
									'<span>' + self.options.message + '</span>' +
								'</div>');

			thumbContainer
				.append(thumbImage)
				.append(thumbMessage)
				.prependTo(self.wrapper);

			self.wrapper.addClass('notify-open');

		};


		// Thumb Circle Notification
		function NotifyThumbCircle() {

			var thumbCircleContainer = $('<div class="thumb-circle--container"></div>');
			var thumbCircleImage = $('<div class="thumb-circle--image">' +
									'<img src="' + self.options.imgSource + '">' +
								'</div>');
			var thumbCircleMessage = $('<div class="thumb-circle--message">' +
									'<span>' + self.options.message + '</span>' +
								'</div>');

			thumbCircleContainer
				.append(thumbCircleImage)
				.append(thumbCircleMessage)
				.prependTo(self.wrapper);

			self.wrapper.addClass('notify-open');

		};


		// Alert Notification
		function NotifyAlert() {
			var alertIcon = '';

			if(self.options.style == 'info') {
				alertIcon = 'info-circle';
			} else if(self.options.style == 'warning') {
				alertIcon = 'exclamation-circle';
			} else if(self.options.style == 'danger') {
				alertIcon = 'times-circle';
			} else if(self.options.style == 'success') {
				alertIcon = 'check-circle';
			} else if(self.options.style == 'primary') {
				alertIcon = 'check-circle';
			}

			var alertContainer = $('<div class="alert--container"></div>');
			var alertImage = $('<div class="alert--image">' +
									'<i class="fa fa-' + alertIcon + '"></i>' +
								'</div>');
			var alertMessage = $('<div class="alert--message">' +
									'<span>' + self.options.message + '</span>' +
								'</div>');

			alertContainer
				.append(alertImage)
				.append(alertMessage)
				.prependTo(self.wrapper);

			self.wrapper.addClass('notify-open');
		};


		// Simple Notification
		function NotifySimple() {
			var simpleContainer = $('<div class="simple--container"></div>');
			var simpleMessage = $('<div class="simple--message">' +
									'<span>' + self.options.message + '</span>' +
								'</div>');

			simpleContainer
				.append(simpleMessage)
				.prependTo(self.wrapper);

			self.wrapper.addClass('notify-open');
		};


		// Flip Notification
		function NotifyFlip() {
			var flipContainer = $('<div class="flip--container"></div>');
			var flipMessage = $('<div class="flip--message">' +
									'<span>' + self.options.message + '</span>' +
								'</div>');

			flipContainer
				.append(flipMessage)
				.prependTo(self.wrapper);

			self.wrapper.addClass('notify-open');
		};


		// Bar Notification
		function NotifyBar() {
			var barContainer = $('<div class="bar--container"></div>');
			var barMessage = $('<div class="bar--message">' +
									'<span>' + self.options.message + '</span>' +
								'</div>');

			barContainer
				.append(barMessage)
				.prependTo(self.wrapper);

			self.wrapper.addClass('notify-open');
		};

		self.wrapper
			.prependTo(self.container);

		self.destroy();

	};


	// Destroy the notification on click of close
	Notification.prototype.destroy = function() {
		var self = this;


		// Auto close for the notification
		if(self.options.autoClose) {
			setTimeout(function() {
				self.wrapper.removeClass('notify-open');

				setTimeout(function() {
					self.wrapper.addClass('notify-close');
				}, 25)

				if(self.options.type == 'thumb') {
					setTimeout(function() {
						self.wrapper.remove();
					}, 2000)
				} else {
					setTimeout(function() {
						self.wrapper.remove();
					}, 600)
				}

			}, 3000)
		}


		// Close on the notification on close button click
		$('body').delegate('.notify-close-button', 'click', function() {
			var $this = $(this);

			self.options.type = $this.closest('.notify-wrapper').attr('data-type');

			$this
				.closest('.notify-wrapper')
				.removeClass('notify-open');

			setTimeout(function() {
				$this.closest('.notify-wrapper').addClass('notify-close');
			}, 25)


			// Based on the notification type,
			// Remove the element with setTimeout
			// until the transition ends
			if(self.options.type == 'thumb' || self.options.type == 'thumb-circle') {
				setTimeout(function() {
					$this.closest('.notify-wrapper')
					.remove();
				}, 2000)
			} else if(self.options.type == 'bar' || self.options.type == 'flip') {
				setTimeout(function() {
					$this.closest('.notify-wrapper')
					.remove();
				}, 300)
			} else {
				setTimeout(function() {
					$this.closest('.notify-wrapper')
					.remove();
				}, 600)
			}
		})
	};


	// New notification
	$.fn.notify = function(options) {
		return this.each(function() {
			new Notification(this, options);
		});
	};

	// Notification Defaults
	$.fn.notify.defaults = {
		type: 'thumb',
		style: 'success',
		message: 'Hello World!!',
		position: 'top-right',
		autoClose: false,
		imgSource: 'images/avatar/avatar1.png'
	};

}(jQuery, window, document));
