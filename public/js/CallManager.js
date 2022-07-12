let callInProgress = false;
let callAnswered = 0;
let audio = null;
let phoneNb = null

EndCall = () => {
	$('.call-popup').remove();
	if ($(".dialog-popup").length > 0) {
		$('.dialog-popup').remove();
	}
	$('#missions-tab').trigger('click');
	cleanMissionBoard();
	callInProgress = false;
}

CreateCallPopup = () => {
	callInProgress = true;
	let modal = read("/Layout/CallPopup.html");
	phoneNb = null;
	if (getRandomInt(10) >= 8) {
		phoneNb = getRandomInt((596000000 - 130000000 + 1)) + 130000000;
	} else {
		phoneNb = getRandomInt((700000000 - 600000000 + 1)) + 600000000;
	}
	if (getRandomInt(10) >= 8) {
		modal = tagToText("{{origin}}", modal, "112");
		modal = tagToText("{{phoneNb}}", modal, phoneNb);
	} else {
		modal = tagToText("{{origin}}", modal, "18");
		modal = tagToText("{{phoneNb}}", modal, phoneNb);
	}
	/*audio = new Audio("/sound/ring.ogg" );
	audio.play();*/
	$('.call-layout').append(modal);
}

ManageCall = () => {
	if (!callInProgress && $('.call-popup').length === 0 && $('.dialog-popup').length === 0)
		//if (getRandomInt(30) === 18)
		if (!getRandomInt(1))
			CreateCallPopup();
}

answerEvent = () => {
	if ($('.call-popup').length > 0) {
		callAnswered++;
		$('.call-count').text(" " + callAnswered);
		$('.call-popup').remove();
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

$(document).ready(function() {
	$("#cancel-engagement").click(function() {
		EndCall();
	});
	$(document).on("click",".dialog-popup", function () {
		$('.dialog-popup').css('z-index', '30000');
		$('.content-container').css('z-index', '20000');
	});
	$(document).on("click",".content-container", function () {
		$('.content-container').css('z-index', '30000');
		$('.dialog-popup').css('z-index', '20000');
	});
});