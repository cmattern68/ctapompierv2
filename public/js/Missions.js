LocateMission = (pos) => {
	drawMarker({x: 16, y: 16}, "/assets/mission.png", {name: "Feu de Maison", lon: pos.lon, lat: pos.lat, id: "Mission_1", title: "Feu de Maison"});
	zoomOnPos({lon: pos.lon, lat: pos.lat}, 14);
}

InitiateDialog = (mission) => {
	let modal = read("/Layout/DialogPopup.html");
	let HeaderDialogLayout = read("/Layout/HeaderDialogLayout.html");
	let LocationDialogLayout = read("/Layout/LocationDialogLayout.html");
	const MeDialogLayout = read("/Layout/MeDialogLayout.html");
	const CallerDialogLayout = read("/Layout/CallerDialogLayout.html");
	const FooterDialogLayout = read("/Layout/FooterDialogLayout.html");
	const dateTime = new Date();
	const time = (dateTime.getHours() < 10 ? "0" : "") + dateTime.getHours() + (dateTime.getMinutes() < 10 ? ":0" : ":") + dateTime.getMinutes();
	const date = day[dateTime.getDay()] + " " + dateTime.getDate() + " " + month[dateTime.getMonth()] + " " + dateTime.getFullYear();
	$('.dialog-layout').append(modal);
	HeaderDialogLayout = tagToText("{{dateTime}}", HeaderDialogLayout, date + ", " + time);
	$('.dialog-popup').append(HeaderDialogLayout);
	mission.dialog.forEach(message => {
		if (message.origin === 0) {
			let me = MeDialogLayout;
			me = tagToText("{{meMessage}}", me, message.message);
			$('.dialog-popup').append(me);
		} else if (message.origin === 1) {
			let caller = CallerDialogLayout;
			caller = tagToText("{{callerMessage}}", caller, message.message);
			$('.dialog-popup').append(caller);
		}
		if (message.locate === true) {
			LocationDialogLayout = tagToText("{{lon}}", LocationDialogLayout, mission.pos.lon);
			LocationDialogLayout = tagToText("{{lat}}", LocationDialogLayout, mission.pos.lat);
			$('.dialog-popup').append(LocationDialogLayout);
		}
	});
	$('.dialog-popup').append(FooterDialogLayout);
}

ChooseMission = () => {
	return new Promise((resolve, reject) => {
		try {
			const mission = JSON.parse(read("/missions/1.json"));
			resolve(mission);
		} catch (e) {
			reject("ChooseMissionErr");
		}
	});
}

CreateMission = () => {
	ChooseMission().then(mission => {
		InitiateDialog(mission);
	}).catch(err => {})
}