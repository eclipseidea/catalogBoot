/* ----------------------------------------------------
 *  Todo
 *
 *  JavaScript file for app.todo.html
 *  
 *  Description: Todo app is exclusively for XPLOIT
 * ---------------------------------------------------- */

/*global
    $
*/

'use strict';

// Main Todo Object
var Todo = {
	// Todo Init Function
	Init: function() {
		// Make the first task container visible
		$('.todo-task-container > div:first-child').addClass('todo-visible');

		// Append the projects list item and contents
		Todo.appendToProjectsUl();
		Todo.appendToProjectContent();

		// Toggle the views of respective projects
		$('#todo-projects-ul > li').on('click', function (e) {
			if (e.target === this || e.target.nodeName === 'SPAN' || e.target.nodeName === 'SMALL') {
				Todo.showTodoContent(this);
			}
		});

		// Initiate the edit task name
		$('.todo-task-container').delegate('.todo-task-name', 'click', function() {
			Todo.editTaskName(this);
		});

		// Initiate the new task 
		Todo.addNewtask();
	},

	// Convert the name to title case
	// and add class todo-visible to make
	// the projects task container visible
	showTodoContent: function(ele) {
		// Variables
		var _ele = $(ele),
		    _iEle = _ele.data('todo-target'),
		    _projectTitle = $('.todo-project-title'),
		    _contentContainer = $('.todo-content-container');

		// Convert to title case
		_projectTitle.html(Todo.convertTitleCase(_iEle));

		// Hide the existing todo-container
		// and remove the class todo-visible
		_contentContainer
			.hide()
			.removeClass('todo-visible');

		// Show the new todo-container
		// and add the class todo-visible
		$('#' + _iEle)
			.show()
			.addClass('todo-visible');
	},

	// Function to convert the text
	// to title case
	convertTitleCase: function(str) {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	},

	// Function to edit the task name
	editTaskName: function(ele) {
		// Variables
		var _iEle = $(ele),
			_iTaskName = _iEle.text(),
			_inputTextBox = $('<input type="text">');

		// Hide the displayed value
		_iEle.hide()
			.after(_inputTextBox);

		// Append the task name to the input
		_inputTextBox.val(_iTaskName)
			.focus()
			.blur(function() {
				Todo.editTaskBlur($(this), ele);
			})
			.keypress(function(e) {
				if(e.which === 13) {
					Todo.editTaskBlur($(this), ele);
				}
			});
	},

	// Function to task on blur
	editTaskBlur: function(textBox, todoTitle) {
		// Variables
		var iEle = $(textBox);
		var $todoTitle = $(todoTitle);

		// Append the text values
		if (iEle.val() !== '') {
			$todoTitle.text(iEle.val()).change();
		}

		// Remove the element on blur
		iEle.remove();

		// Show the todo title
		$todoTitle.show();
	},

	// Function to append the unordered list
	// on hovering the projects name
	appendToProjectsUl: function() {
		// Dropdown markup
		var dropDownHTML = $('<div class="dropdown">' +
								'<a href="javascript:void(0)" data-toggle="dropdown" class="text-default">' +
									'<i class="fa fa-ellipsis-h fs-xs fa-fw"></i>' +
								'</a>' +

								'<!-- Begin Dropdown Menu -->' +
								'<ul class="dropdown-menu dropdown-menu-right">' +
									'<li>' +
										'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
											'<i class="fa fa-plus fa-fw m-xs-r"></i> Add to project' +
										'</a>' +
									'</li>' +
									'<li>' +
										'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
											'<i class="fa fa-trash fa-fw m-xs-r"></i> Delete from project' +
										'</a>' +
									'</li>' +
									'<li>' +
										'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
											'<i class="fa fa-edit fa-fw m-xs-r"></i> Edit project' +
										'</a>' +
									'</li>' +
									'<li>' +
										'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
											'<i class="fa fa-share fa-fw m-xs-r"></i> Share project' +
										'</a>' +
									'</li>' +
									'<li class="divider"></li>' +
									'<li>' +
										'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
											'<i class="fa fa-archive fa-fw m-xs-r"></i> Archive' +
										'</a>' +
									'</li>' +
									'<li>' +
										'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
											'<i class="fa fa-trash-o fa-fw m-xs-r"></i> Delete Project' +
										'</a>' +
									'</li>' +
								'</ul>' +
							'</div>'),
			projectsListItems = $('#todo-projects-ul > .todo-projects-li');

		// Append the dropdown html
		$(dropDownHTML)
			.appendTo(projectsListItems);
		
	},

	// Function to append the unordered list
	// on hovering the task
	appendToProjectContent: function() {
		// Dropdown markup
		var ProjectContentDropDownHTML = $('<!-- Begin Task Dropdown -->' +
											'<div class="dropdown">' +
												'<a href="javascript:void(0)" data-toggle="dropdown" class="text-default">' +
													'<i class="fa fa-ellipsis-h fs-xs fa-fw"></i>' +
												'</a>' +

												'<!-- Begin Dropdown Menu -->' +
												'<ul class="dropdown-menu dropdown-menu-right">' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-edit fa-fw m-xs-r"></i> Edit Task' +
														'</a>' +
													'</li>' +
													'<li class="divider"></li>' +
													'<li>' +
														'<p class="text-default text-uppercase fs-sm p-sm m-n">' +
															'<span class="fs-xs d-b h-20 lh-20">Priority</span>' +
															'<a href="javascript:void(0)" class="text-info h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-o fa-2x fa-fw m-xs-r"></i>' +
															'</a>' +
															'<a href="javascript:void(0)" class="text-warning h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-o fa-2x fa-fw m-xs-r"></i>' +
															'</a>' +
															'<a href="javascript:void(0)" class="text-danger h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-o fa-2x fa-fw m-xs-r text-danger"></i>' +
															'</a>' +
															'<a href="javascript:void(0)" class="text-danger h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-checkered fa-2x fa-fw m-xs-r"></i>' +
															'</a>' +
														'</p>' +
													'</li>' +
													'<li class="divider"></li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-bell-o fa-fw m-xs-r"></i> Reminders' +
														'</a>' +
													'</li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-suitcase fa-fw m-xs-r"></i> Move to another project' +
														'</a>' +
													'</li>' +
													'<li class="divider"></li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-archive fa-fw m-xs-r"></i> Archive' +
														'</a>' +
													'</li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-trash-o fa-fw m-xs-r"></i> Delete Task' +
														'</a>' +
													'</li>' +
												'</ul>' +
												'<!-- End Task Menu -->' +
											'</div>' +
											'<!-- End Project Dropdown -->'),
			projectContentListItems = $('.todo-content-container > .todo-task');

			// Append the markup to the task
			$(ProjectContentDropDownHTML)
				.appendTo(projectContentListItems);
	},

	// Function to add new task
	addNewtask: function() {
		// Call function on return key press
		$('#add-task').keypress(function(e) {
			if(e.which === 13) {
				// Required variables
				var _addTaskVal = $('#add-task').val(),
					_addTaskGenID = $('.todo-task-container > .todo-visible > .todo-task').length + 1,
					_todoId = $('.todo-task-container > .todo-visible').attr('id'),
					_newTaskHTML = $('<!-- Begin Todo Task -->' +
										'<div class="todo-task clearfix">' +
											'<!-- Begin Checkbox -->' +
											'<div class="checkbox">' +
												'<label for="todo-'+ _todoId + _addTaskGenID +'" class="checkbox-default primary">' +
													'<input type="checkbox" name="checkbox1" id="todo-'+ _todoId + _addTaskGenID +'">' +
													'<span></span>' +
												'</label>' +
											'</div>' +
											'<!-- End Checkbox -->' +

											'<!-- Begin Task Name -->' +
											'<span class="todo-task-name">'+ _addTaskVal +'</span>' +
											'<!-- End Task Name -->' +
											'<!-- Begin Task Dropdown -->' +
											'<div class="dropdown">' +
												'<a href="javascript:void(0)" data-toggle="dropdown" class="text-default">' +
													'<i class="fa fa-ellipsis-h fs-xs fa-fw"></i>' +
												'</a>' +

												'<!-- Begin Dropdown Menu -->' +
												'<ul class="dropdown-menu dropdown-menu-right">' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-edit fa-fw m-xs-r"></i> Edit Task' +
														'</a>' +
													'</li>' +
													'<li class="divider"></li>' +
													'<li>' +
														'<p class="text-default text-uppercase fs-sm p-sm m-n">' +
															'<span class="fs-xs d-b h-20 lh-20">Priority</span>' +
															'<a href="javascript:void(0)" class="text-info h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-o fa-2x fa-fw m-xs-r"></i>' +
															'</a>' +
															'<a href="javascript:void(0)" class="text-warning h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-o fa-2x fa-fw m-xs-r"></i>' +
															'</a>' +
															'<a href="javascript:void(0)" class="text-danger h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-o fa-2x fa-fw m-xs-r text-danger"></i>' +
															'</a>' +
															'<a href="javascript:void(0)" class="text-danger h-30 lh-30 d-ib">' +
																'<i class="fa fa-flag-checkered fa-2x fa-fw m-xs-r"></i>' +
															'</a>' +
														'</p>' +
													'</li>' +
													'<li class="divider"></li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-bell-o fa-fw m-xs-r"></i> Reminders' +
														'</a>' +
													'</li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-suitcase fa-fw m-xs-r"></i> Move to another project' +
														'</a>' +
													'</li>' +
													'<li class="divider"></li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-archive fa-fw m-xs-r"></i> Archive' +
														'</a>' +
													'</li>' +
													'<li>' +
														'<a href="javascript:void(0)" class="text-default text-uppercase fs-sm">' +
															'<i class="fa fa-trash-o fa-fw m-xs-r"></i> Delete Task' +
														'</a>' +
													'</li>' +
												'</ul>' +
												'<!-- End Task Menu -->' +
											'</div>' +
											'<!-- End Project Dropdown -->' +
										'</div>' +
										'<!-- End Todo Task -->');

				// Append the markup to the
				// visible todo container
				$(_newTaskHTML).appendTo('.todo-visible');

				// Restore the input value to nothing
				$('#add-task').val('');
			}
		});
	}
};

$(function () {
	// Initiate the task
	Todo.Init();
});