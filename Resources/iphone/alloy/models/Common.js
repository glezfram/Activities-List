function getDate() {
    var dateFormat = moment().utc().format("DD/MM/YY");
    return dateFormat;
}

var moment = require("alloy/moment");

module.exports = getDate;

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("common", exports.definition, []);

collection = Alloy.C("common", exports.definition, model);

exports.Model = model;

exports.Collection = collection;