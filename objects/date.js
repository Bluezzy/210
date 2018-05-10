var today = new Date();
var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1)
var nextWeek = new Date(today.getTime());

function suffix(monthDay) {
	var isException = (monthDay >= 11 && monthDay <= 13)
	if (isException || (monthDay % 10 > 3) || (monthDay % 10 == 0)) {
		return 'th';
	} else if (monthDay % 10 == 3) {
		return 'rd';
	} else if (monthDay % 10 == 2) {
		return 'nd';
	} else if (monthDay % 10 == 1) {
		return 'st';
	}
}

function formattedMonth(date) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	return months[today.getMonth()];
}

function formattedDay(date) {
	var dayIndex = date.getDay();
	var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return String(daysOfWeek[dayIndex]);
}

function formattedDayNumber(date) {
	var dayOfMonth = date.getDate();
	return (String(dayOfMonth) + suffix(dayOfMonth));
}

function formattedDate(date) {
	var day = formattedDay(date);
	var month = formattedMonth(date);
	var dayNumber = formattedDayNumber(date);
	console.log("Today's day is " + day + ", " + month + " " + dayNumber);
}

function formatTime(date) {
	var hours = String(date.getHours());
	if (hours.length === 1) {
		hours = '0' + hours;
	}
	var minutes = String(date.getMinutes());
	if (minutes.length === 1) {
		minutes = '0' + minutes;
	}
	console.log(hours + ":" + minutes)
}