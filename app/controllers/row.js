var moment = require('alloy/moment');
var todos = Alloy.Collections.todo;
var common = require('/common');
var id;

// $model represents the current model accessible to this
// controller from the markup's model-view binding. $model
// will be null if there is no binding in place.

if ($model) {
	id = $model.id;
	if ($model.get('done')) {
		$.row.backgroundColor = '#eee';
		$.check.backgroundColor = '#eee';
		$.task.color = '#ccc';
		$.update.color = '#ccc';
		$.check.image = '/tick_64.png';
	} else {
		$.row.backgroundColor = '#fff';
		$.check.backgroundColor = '#fff';
		$.task.color = '#000';
		$.update.color = "#000";
		$.check.image = '/tick_gray_64.png';
	}
}

// toggle the "done" status of the IDed todo
function toggleStatus(e) {
	// find the todo task by id
	var todo = todos.get(id);

	// set the current "done" and "date_completed" fields for the model,
	// then save to presistence, and model-view binding will automatically
	// reflect this in the tableview
	
	todo.set({
		"done": todo.get('done') ? 0 : 1,
		"date_completed": common.getDate()
	}).save();
}

// delete the IDed todo from the collection
function deleteTask(e) {
	// prevent bubbling up to the row
	e.cancelBubble = true;

	// find the todo task by id
	var todo = todos.get(id);

	// destroy the model from persistence, which will in turn remove
	// it from the collection, and model-view binding will automatically
	// reflect this in the tableview
	todo.destroy();
}

//open the update window
function editTask(e) {
	Ti.API.info("El id a ser modificado es: " + id);
	var send = todos.get(id);
	var updateWindow = Alloy.createController("update",{
		data: send,
		"$model": send
	});
	
	updateWindow.getView().open();
}