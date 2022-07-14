const modal = read("/Layout/DialogPopup.html");
const HeaderDialogLayout = read("/Layout/HeaderDialogLayout.html");
const LocationDialogLayout = read("/Layout/LocationDialogLayout.html");
const MeDialogLayout = read("/Layout/MeDialogLayout.html");
const CallerDialogLayout = read("/Layout/CallerDialogLayout.html");
const FooterDialogLayout = read("/Layout/FooterDialogLayout.html");
let Mission = null;
let MsgToDisplay = 0;
let LoadInProgress = false;
let missionLocInfo = {}

LocateMission = (pos) => {
	drawMarker({x: 16, y: 16}, "/assets/mission.png", {name: "Feu de Maison", lon: pos.lon, lat: pos.lat, id: "Mission_1", title: "Feu de Maison"});
	zoomOnPos({lon: pos.lon, lat: pos.lat}, 14);
	updateDistances({lon: pos.lon, lat: pos.lat});
}

endConversation = () => {
	$('.btn-msg-next').remove();
	$('.dialog-popup').append(FooterDialogLayout);
}

MessageNext = async () => {
	const message = Mission.dialog[MsgToDisplay];

	if (LoadInProgress)
		return;

	if (message.origin === 0) {
		let MeLayout = MeDialogLayout;
		MeLayout = tagToText("{{meMessage}}", MeLayout, message.message);
		$(MeLayout).insertBefore($('.btn-msg-next'));
	} else if (message.origin === 1) {
		let CallerLayout = CallerDialogLayout;
		if (message.locate === true) {
			const address = missionLocInfo.address;
			let msg = tagToText("{{address}}", message.message, address.features[0].properties.label);
			CallerLayout = tagToText("{{callerMessage}}", CallerLayout, msg);
			$(CallerLayout).insertBefore($('.btn-msg-next'));
			let LocationLayout = LocationDialogLayout;
			LocationLayout = tagToText("{{lon}}", LocationLayout, address.features[0].geometry.coordinates[0]);
			LocationLayout = tagToText("{{lat}}", LocationLayout, address.features[0].geometry.coordinates[1]);
			$(LocationLayout).insertBefore($('.btn-msg-next'));
		} else {
			CallerLayout = tagToText("{{callerMessage}}", CallerLayout, message.message);
			$(CallerLayout).insertBefore($('.btn-msg-next'));
		}
	}

	++MsgToDisplay;
	LoadInProgress = false;
	if (Mission.dialog[MsgToDisplay] === undefined) {
		endConversation();
	}
}

InitiateDialog = () => {
	MsgToDisplay = 0;
	const dateTime = new Date();
	const time = (dateTime.getHours() < 10 ? "0" : "") + dateTime.getHours() + (dateTime.getMinutes() < 10 ? ":0" : ":") + dateTime.getMinutes();
	const date = day[dateTime.getDay()] + " " + dateTime.getDate() + " " + month[dateTime.getMonth()] + " " + dateTime.getFullYear();
	let Header = tagToText("{{dateTime}}", HeaderDialogLayout, date + ", " + time);
	Header = tagToText("{{phoneNb}}", Header, "+33" + phoneNb);
	const FirstMessage = Mission.dialog[MsgToDisplay];
	$('.dialog-layout').append(modal);
	$(Header).insertBefore($('.btn-msg-next'));

	if (FirstMessage.origin === 0) {
		let MeLayout = MeDialogLayout;
		MeLayout = tagToText("{{meMessage}}", MeLayout, FirstMessage.message);
		$(MeLayout).insertBefore($('.btn-msg-next'));
	} else if (FirstMessage.origin === 1) {
		let CallerLayout = CallerDialogLayout;
		CallerLayout = tagToText("{{callerMessage}}", CallerLayout, FirstMessage.message);
		$(CallerLayout).insertBefore($('.btn-msg-next'));
	}
	++MsgToDisplay;
}

ChooseMission = () => {
	return new Promise((resolve, reject) => {
		try {
			const mission = JSON.parse(read("/missions/1.json"));
			Mission = mission;
			resolve("ChooseMission");
		} catch (e) {
			reject("ChooseMissionErr");
		}
	});
}

CreateMission = () => {
	ChooseMission().then(() => {
		city = null;
		InitiateDialog();
	}).catch(err => {})
}