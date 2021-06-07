let borderDisplayStyle = {strokeWidth: 2, strokeColor: '#34495e', fillColor: '#34495e', fillOpacity: 0};
let borderInvisibleStyle = {strokeWidth: 0, strokeColor: '#34495e', fillColor: '#34495e', fillOpacity: 0};
let CountyBorderLayer = null;
let BoroughBorderLayer = null;
let CantonBorderLayer = null;
let TownBorderLayer = null;

delimitCountyBorder = () => {
	return new Promise((resolve, reject) => {
		CountyBorderLayer = drawGeojson('geojson/county/' + County + '.geojson', borderDisplayStyle);
		resolve("CountyBorderDelimitate");
	});
};

delimitBoroughBorder = () => {
	return new Promise((resolve, reject) => {
		BoroughBorderLayer = drawGeojson('geojson/borough/' + County + '.geojson', borderDisplayStyle);
		BoroughBorderLayer.style = borderInvisibleStyle;
		resolve("BoroughBorderDelimitate");
	});
};

delimitCantonBorder = () => {
	return new Promise((resolve, reject) => {
		CantonBorderLayer = drawGeojson('geojson/canton/' + County + '.geojson', borderDisplayStyle);
		CantonBorderLayer.style = borderInvisibleStyle;
		resolve("CantonBorderDelimitate");
	});
};

delimitTownBorder = () => {
	return new Promise((resolve, reject) => {
		TownBorderLayer = drawGeojson('geojson/town/' + County + '.geojson', borderDisplayStyle);
		TownBorderLayer.style = borderInvisibleStyle;
		resolve("TownBorderDelimitate");
	});
};

delimitBorder = () => {
	return new Promise((resolve, reject) => {
		delimitCountyBorder()
			.then(res => {
				delimitBoroughBorder()
					.then(res => {
					delimitCantonBorder()
						.then(res => {
						delimitTownBorder()
							.then(res => {
							resolve({1: "CountyBorderDelimitate", 2: "BoroughBorderDelimitate", 3: "CantonDelimitate", 4: "TownBorderDelimitate"});
						}).catch(err => {
							reject("TownBorderDelimitateErr");
						});
					}).catch(err => {
						reject("CantonDelimitateErr");
					});
				}).catch(err => {
					console.log(err);
					reject("BoroughBorderDelimitateErr");
				});
			}).catch(err => {
			reject("CountyBorderDelimitateErr");
		});
	});
};