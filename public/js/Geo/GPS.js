const ApiKey = "df272389183b47389919435bd2244190";

getDistance = (posA, posB) => {
	let R = 6371;
	let dLat = deg2rad(posB.lat - posA.lat);
	let dLon = deg2rad(posB.lon - posA.lon);
	let a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(posA.lat)) * Math.cos(deg2rad(posB.lat)) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2)
	;
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	let d = R * c;
	return Math.round(d * 10) / 10;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

getPolygonBounds = (polygon) => {
	let paths = polygon.getPaths();
	let bounds = new google.maps.LatLngBounds();
	paths.forEach(function(path) {
		let ar = path.getArray();
		for(let i = 0, l = ar.length;i < l; i++) {
			bounds.extend(ar[i]);
		}
	});
	return bounds;
}

getPosInCountyPerimeter = (t = false) => {
	const geojson = JSON.parse(read('geojson/county/' + County + '.geojson'));
	const bbox = turf.bbox(turf.lineString(geojson.geometry.coordinates[0]));
	const west = bbox[0];
	const south = bbox[1];
	const east = bbox[2];
	const north = bbox[3];
	const lat = north + (Math.random() * (south - north));
	const lon = west + (Math.random() * (east - west));
	return ({lon: lon, lat: lat});
}