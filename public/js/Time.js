setTimeText = () => {
	let dateTime = new Date();
	const time = (dateTime.getHours() < 10 ? "0" : "") + dateTime.getHours() + (dateTime.getMinutes() < 10 ? ":0" : ":") + dateTime.getMinutes() + (dateTime.getSeconds() < 10 ? ":0" : ":") + dateTime.getSeconds();
	const date = dateTime.getDate() + " " + month[dateTime.getMonth()] + " " + dateTime.getFullYear();
	$('.time-txt').text(time);
	$('.date-txt').text(date);
}

setInterval(setTimeText, 1000);