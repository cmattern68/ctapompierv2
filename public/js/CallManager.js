let callInProgress = false;
let callAnswered = 0;
let audio = null;

CreateCallPopup = () => {
	callInProgress = true;
	let modal = read("/Layout/CallPopup.html");
	if (getRandomInt(10) >= 8) {
		modal = tagToText("{{origin}}", modal, "112");
		modal = tagToText("{{phoneNb}}", modal, getRandomInt((596000000 - 130000000 + 1)) + 130000000);
	} else {
		modal = tagToText("{{origin}}", modal, "18");
		modal = tagToText("{{phoneNb}}", modal, getRandomInt((700000000 - 600000000 + 1)) + 600000000);
	}
	/*audio = new Audio("/sound/ring.ogg" );
	audio.play();*/
	$('.call-layout').append(modal);
}

ManageCall = () => {
	if (!callInProgress && $('.call-popup').length === 0 && $('.dialog-popup').length === 0)
		if (!getRandomInt(1))
			CreateCallPopup();
}

answerEvent = () => {
	if ($('.call-popup').length > 0) {
		callAnswered++;
		$('.call-count').text(" " + callAnswered);
		$('.call-popup').remove();
		callInProgress = false;
		$('#mission-tab').trigger('click');
		if (audio !== null) {
			audio.pause();
			audio = null;
		}
		CreateMission();
	}
}

declineEvent = () => {
	if ($('.call-popup').length > 0) {
		$('.call-popup').remove();
		callInProgress = false;
		if (audio !== null) {
			audio.pause();
			audio = null;
		}
	}
}