function Controller() {
    function updateItem() {
        var todos = Alloy.Collections.todo;
        var task = Alloy.createModel("Todo", {
            item: $.itemField.value,
            done: 0,
            date_completed: common.getDate()
        });
        todos.add(task);
        task.save();
        todos.fetch();
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "update";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.updateWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        barColor: "#a00",
        id: "updateWin",
        title: "Update Item",
        modal: "true"
    });
    $.__views.updateWin && $.addTopLevelView($.__views.updateWin);
    focusTextField ? $.__views.updateWin.addEventListener("open", focusTextField) : __defers["$.__views.updateWin!open!focusTextField"] = true;
    $.__views.itemField = Ti.UI.createTextField({
        width: "90%",
        top: "25dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "itemField",
        hintText: "undefined" != typeof $model.__transform["item"] ? $model.__transform["item"] : $model.get("item")
    });
    $.__views.updateWin.add($.__views.itemField);
    closeKeyboard ? $.__views.itemField.addEventListener("return", closeKeyboard) : __defers["$.__views.itemField!return!closeKeyboard"] = true;
    $.__views.__alloyId18 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Update Task",
        id: "__alloyId18"
    });
    $.__views.updateWin.add($.__views.__alloyId18);
    updateItem ? $.__views.__alloyId18.addEventListener("click", updateItem) : __defers["$.__views.__alloyId18!click!updateItem"] = true;
    $.__views.__alloyId19 = Ti.UI.createButton({
        width: "50%",
        top: "20dp",
        title: "Cancel",
        id: "__alloyId19"
    });
    $.__views.updateWin.add($.__views.__alloyId19);
    closeWindow ? $.__views.__alloyId19.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId19!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    require("alloy/moment");
    Alloy.Collections.todo;
    var common = require("/common");
    var id;
    id = $model.id;
    __defers["$.__views.updateWin!open!focusTextField"] && $.__views.updateWin.addEventListener("open", focusTextField);
    __defers["$.__views.itemField!return!closeKeyboard"] && $.__views.itemField.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId18!click!updateItem"] && $.__views.__alloyId18.addEventListener("click", updateItem);
    __defers["$.__views.__alloyId19!click!closeWindow"] && $.__views.__alloyId19.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;