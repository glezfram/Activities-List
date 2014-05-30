var args = arguments[0] || {};
var moment = require('alloy/moment');
var todos = Alloy.Collections.todo;
var common = require('/common');
var id;

//Ti.API.info("------> Item: " + args.data.attributes.item);
id = $model.id;

function updateItem(){
	//Ti.API.info("-----> Value of field: " + $.itemField.value);
	
	
	var todos = Alloy.Collections.todo;

    // Create a new model for the todo collection
    var task = Alloy.createModel('Todo', {
        item : $.itemField.value,
        done : 0,
        date_completed: common.getDate()
    });

    todos.add(task);
    task.save();
    todos.fetch();
	
	// Delete old todo but it could be update with
	//todo.set({item:$.itemField.value});
	var todo = todos.get(id);
	todo.destroy();
	
	closeWindow();
}

function focusTextField() {
    $.itemField.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}

function closeWindow() {
    $.updateWin.close();
}