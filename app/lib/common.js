var moment = require('alloy/moment');


function getDate() {
	//This is a commonJUs which returns a date with format DD/MM/YY
	var dateFormat = moment().utc().format("DD/MM/YY");

	return dateFormat; 
};

exports.getDate = getDate;