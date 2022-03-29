delimitCountyBorder = () => {
	return new Promise((resolve, reject) => {
		drawGeojson('geojson/county/' + County + '.geojson');
		clearGeoJson();
		resolve("CountyBorderDelimitate");
	});
};

delimitBoroughBorder = () => {
	return new Promise((resolve, reject) => {
		drawGeojson('geojson/borough/' + County + '.geojson');
		clearGeoJson();
		resolve("BoroughBorderDelimitate");
	});
};

delimitCantonBorder = () => {
	return new Promise((resolve, reject) => {
		drawGeojson('geojson/canton/' + County + '.geojson');
		clearGeoJson();
		resolve("CantonBorderDelimitate");
	});
};

delimitTownBorder = () => {
	return new Promise((resolve, reject) => {
		drawGeojson('geojson/town/' + County + '.geojson');
		clearGeoJson();
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