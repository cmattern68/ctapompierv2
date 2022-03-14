let CSPLayer = null;
let CISLayer = null;
let CPILayer = null;
let stationsMarker = {};

pinStations = () => {
	return new Promise((resolve, reject) => {
		const county = httpGet("http://localhost/stations?county=" + County);
		drawCSP(county.csp);
		drawCIS(county.cis);
		drawCPI(county.cpi);
		resolve("StationsPinned");
	});
}

drawCSP = (csp) => {
	csp.forEach(station => {
		const marker = drawMarker(
			{x: 16, y: 16},
			"/assets/csp.png",
			{name: station.city, lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1], id: station.id, title: station.city},
			CSPLayer
		);
		if (CSPLayer === null) {
			CSPLayer = marker.layer;
			stationsMarker[station.id] = marker.marker;
		} else
			stationsMarker[station.id] = marker;
	});
}

drawCIS = (cis) => {
	cis.forEach(station => {
		const marker = drawMarker(
			{x: 16, y: 16},
			"/assets/cis.png",
			{name: station.city, lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1], id: station.id, title: station.city},
			CISLayer
		);
		if (CISLayer === null) {
			CISLayer = marker.layer;
			stationsMarker[station.id] = marker.marker;
		} else
			stationsMarker[station.id] = marker;
	});
}

drawCPI = (cpi) => {
	cpi.forEach(station => {
		const marker = drawMarker(
			{x: 16, y: 16},
			"/assets/cpi.png",
			{name: station.city, lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1], id: station.id, title: station.city},
			CPILayer
		);
		if (CPILayer === null) {
			CPILayer = marker.layer;
			stationsMarker[station.id] = marker.marker;
		} else
			stationsMarker[station.id] = marker;
	});
}