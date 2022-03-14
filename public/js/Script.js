let County = null;

init = (county) => {
	disableScroll();
	County = county;
	//$('.olControlZoom').remove();
	delimitBorder()
		.then(res => {
			pinStations()
				.then(res => {
					MissionCreator().then(res => {
					}).catch(err => {});
			}).catch(err => {
				console.log(err);
			})
	}).catch(err => {
		console.log(err);
	});
};

gameLoop = () => {
	ManageCall();
	eventCatcher();
}

setInterval(gameLoop, 500);