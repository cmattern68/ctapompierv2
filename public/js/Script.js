let County = null;

init = (county) => {
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
}

setInterval(gameLoop, 500);