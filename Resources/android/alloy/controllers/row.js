function Controller() {
    function toggleStatus() {
        var todo = todos.get(id);
        todo.set({
            done: todo.get("done") ? 0 : 1,
            date_completed: common.getDate()
        }).save();
    }
    function deleteTask(e) {
        e.cancelBubble = true;
        var todo = todos.get(id);
        todo.destroy();
    }
    function editTask() {
        Ti.API.info("El id a ser modificado es: " + id);
        var send = todos.get(id);
        var updateWindow = Alloy.createController("update", {
            data: send,
            $model: send
        });
        updateWindow.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "80dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.check = Ti.UI.createImageView({
        image: "/tick_gray_64.png",
        left: 0,
        height: "50dp",
        width: "50dp",
        id: "check"
    });
    $.__views.row.add($.__views.check);
    toggleStatus ? $.__views.check.addEventListener("click", toggleStatus) : __defers["$.__views.check!click!toggleStatus"] = true;
    $.__views.task = Ti.UI.createLabel({
        color: "#000",
        top: "15dp",
        left: "50dp",
        right: "50dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "18dp"
        },
        id: "task",
        text: "undefined" != typeof $model.__transform["item"] ? $model.__transform["item"] : $model.get("item")
    });
    $.__views.row.add($.__views.task);
    $.__views.update = Ti.UI.createLabel({
        color: "#000",
        top: "50dp",
        left: "50dp",
        right: "50dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "10dp"
        },
        id: "update",
        text: "undefined" != typeof $model.__transform["date_completed"] ? $model.__transform["date_completed"] : $model.get("date_completed")
    });
    $.__views.row.add($.__views.update);
    $.__views.edit = Ti.UI.createImageView({
        image: "/edit.png",
        right: 30,
        height: "50dp",
        width: "50dp",
        id: "edit"
    });
    $.__views.row.add($.__views.edit);
    editTask ? $.__views.edit.addEventListener("click", editTask) : __defers["$.__views.edit!click!editTask"] = true;
    $.__views.remove = Ti.UI.createImageView({
        image: "/red_x.png",
        right: 0,
        height: "50dp",
        width: "50dp",
        id: "remove"
    });
    $.__views.row.add($.__views.remove);
    deleteTask ? $.__views.remove.addEventListener("click", deleteTask) : __defers["$.__views.remove!click!deleteTask"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy/moment");
    var todos = Alloy.Collections.todo;
    var common = require("/common");
    var id;
    if ($model) {
        id = $model.id;
        if ($model.get("done")) {
            $.row.backgroundColor = "#eee";
            $.check.backgroundColor = "#eee";
            $.task.color = "#ccc";
            $.update.color = "#ccc";
            $.check.image = "/tick_64.png";
        } else {
            $.row.backgroundColor = "#fff";
            $.check.backgroundColor = "#fff";
            $.task.color = "#000";
            $.update.color = "#000";
            $.check.image = "/tick_gray_64.png";
        }
    }
    __defers["$.__views.check!click!toggleStatus"] && $.__views.check.addEventListener("click", toggleStatus);
    __defers["$.__views.edit!click!editTask"] && $.__views.edit.addEventListener("click", editTask);
    __defers["$.__views.remove!click!deleteTask"] && $.__views.remove.addEventListener("click", deleteTask);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;