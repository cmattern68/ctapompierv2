ManageCall = () => {
    if (call === null && !callInProgress && !callPreparing && $('.call-popup').length === 0 && $('.dialog-popup').length === 0) {
        //if (getRandomInt(30) === 18)
        if (!getRandomInt(1)) {
            callPreparing = true;
            findAddressInCountyPerimeter().then(address => {
                call = new Call(address);
                call.pinPopUp()
            });
        }
    }
}

$(document).ready(function() {
    $(document).on("click",".dialog-popup", function () {
        $('.dialog-popup').css('z-index', '30000');
        $('.content-container').css('z-index', '20000');
    });
    $(document).on("click",".content-container", function () {
        $('.content-container').css('z-index', '30000');
        $('.dialog-popup').css('z-index', '20000');
    });
});