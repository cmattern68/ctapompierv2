const modal = read("/Layout/DialogPopup.html");
const HeaderDialogLayout = read("/Layout/HeaderDialogLayout.html");
const LocationDialogLayout = read("/Layout/LocationDialogLayout.html");
const MeDialogLayout = read("/Layout/MeDialogLayout.html");
const CallerDialogLayout = read("/Layout/CallerDialogLayout.html");
const FooterDialogLayout = read("/Layout/FooterDialogLayout.html");
let LoadInProgress = false;
let missionLocInfo = {}

class Call {
    constructor(address) {
        this.address = address;
        if (getRandomInt(10) >= 8) {
            this.originCall = (getRandomInt((596000000 - 130000000 + 1)) + 130000000);
        } else {
            this.originCall = (getRandomInt((700000000 - 600000000 + 1)) + 600000000);
        }
        if (getRandomInt(10) >= 8) {
            this.targetCallCenter = "112";
        } else {
            this.targetCallCenter = "18"
        }
        this.mission = JSON.parse(read("/missions/1.json"));
        this.dialog = this.mission.dialog;
        this.MsgToDisplay = 0;
    }

    pinPopUp = () => {
        let modal = read("/Layout/CallPopup.html");
        modal = tagToText("{{origin}}", modal, this.targetCallCenter);
        modal = tagToText("{{phoneNb}}", modal, this.originCall);
        $('.call-layout').append(modal);
    }

    answer = () => {
        if ($('.call-popup').length > 0) {
            callAnswered++;
            $('.call-count').text(" " + callAnswered);
            $('.call-popup').remove();
            $('#mission-tab').trigger('click');
            /*if (audio !== null) {
                audio.pause();
                audio = null;
            }*/
            this.StartDialog();
        }
    }

    decline = () => {
        if ($('.call-popup').length > 0) {
            $('.call-popup').remove();
            callInProgress = false;
            call = null;
            /*if (audio !== null) {
                audio.pause();
                audio = null;
            }*/
        }
    }

    StartDialog = () => {
        const dateTime = new Date();
        const time = (dateTime.getHours() < 10 ? "0" : "") + dateTime.getHours() + (dateTime.getMinutes() < 10 ? ":0" : ":") + dateTime.getMinutes();
        const date = day[dateTime.getDay()] + " " + dateTime.getDate() + " " + month[dateTime.getMonth()] + " " + dateTime.getFullYear();
        let Header = tagToText("{{dateTime}}", HeaderDialogLayout, date + ", " + time);
        Header = tagToText("{{phoneNb}}", Header, "+33" + this.originCall);
        const FirstMessage = this.dialog[this.MsgToDisplay];
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
        ++this.MsgToDisplay;
    }

    UnRollDialog = () => {
        const message = this.dialog[this.MsgToDisplay];

        if (LoadInProgress)
            return;

        if (message.origin === 0) {
            let MeLayout = MeDialogLayout;
            MeLayout = tagToText("{{meMessage}}", MeLayout, message.message);
            $(MeLayout).insertBefore($('.btn-msg-next'));
        } else if (message.origin === 1) {
            let CallerLayout = CallerDialogLayout;
            if (message.locate === true) {
                let msg = tagToText("{{address}}", message.message, this.address.properties.label);
                CallerLayout = tagToText("{{callerMessage}}", CallerLayout, msg);
                $(CallerLayout).insertBefore($('.btn-msg-next'));
                let LocationLayout = LocationDialogLayout;
                LocationLayout = tagToText("{{lon}}", LocationLayout, this.address.geometry.coordinates[0]);
                LocationLayout = tagToText("{{lat}}", LocationLayout, this.address.geometry.coordinates[1]);
                $(LocationLayout).insertBefore($('.btn-msg-next'));
            } else {
                CallerLayout = tagToText("{{callerMessage}}", CallerLayout, message.message);
                $(CallerLayout).insertBefore($('.btn-msg-next'));
            }
        }

        ++this.MsgToDisplay;
        LoadInProgress = false;
        if (this.dialog[this.MsgToDisplay] === undefined) {
            this.endConversation();
        }
    }

    LocateMission = (pos) => {
        drawMarker({x: 16, y: 16}, "/assets/mission.png", {name: "Feu de Maison", lon: pos.lon, lat: pos.lat, id: "Mission_1", title: "Feu de Maison"});
        zoomOnPos({lon: pos.lon, lat: pos.lat}, 14);
    }

    endConversation = () => {
        $('.btn-msg-next').remove();
        $('.dialog-popup').append(FooterDialogLayout);
    }

    end = () => {
        $('.call-popup').remove();
        if ($(".dialog-popup").length > 0) {
            $('.dialog-popup').remove();
        }
        $('#missions-tab').trigger('click');
        //cleanMissionBoard();
        callInProgress = false;
        call = null;
    }

    cancel = () => {
        this.end()
    }
}