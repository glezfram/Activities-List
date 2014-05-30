function getDate() {
    var dateFormat = moment().utc().format("DD/MM/YY");
    return dateFormat;
}

var moment = require("alloy/moment");

exports.getDate = getDate;