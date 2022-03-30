delimitCountyBorder = () => {
	return new Promise((resolve, reject) => {
		clearGeoJson();
		drawGeojson('geojson/county/' + County + '.geojson');
		resolve("CountyBorderDelimitate");
	});
};

delimitBoroughBorder = () => {
	return new Promise((resolve, reject) => {
		clearGeoJson();
		drawGeojson('geojson/borough/' + County + '.geojson');
		resolve("BoroughBorderDelimitate");
	});
};

delimitCantonBorder = () => {
	return new Promise((resolve, reject) => {
		clearGeoJson();
		drawGeojson('geojson/canton/' + County + '.geojson');
		resolve("CantonBorderDelimitate");
	});
};

delimitTownBorder = () => {
	return new Promise((resolve, reject) => {
		clearGeoJson();
		drawGeojson('geojson/town/' + County + '.geojson');
		resolve("TownBorderDelimitate");
	});
};

delimitBorder = () => {
	return new Promise((resolve, reject) => {
		delimitCountyBorder()
			.then(res => {
				resolve({1: "CountyBorderDelimitate"});
			}).catch(err => {
				reject("CountyBorderDelimitateErr");
		});
	});
};