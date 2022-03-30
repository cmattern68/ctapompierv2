let County = null;

init = (county) => {
	County = county;
	//$('.olControlZoom').remove();
	initMap();
	delimitBorder()
		.then(res => {
			pinStations()
				.then(res => {
					loadVehicles()
						.then(res => {
							MissionCreator().then(res => {
							}).catch(err => {
								console.log(err);
							});
						}).catch(err => {
						console.log(err);
					})
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