let CSPLayer = null;
let CISLayer = null;
let CPILayer = null;
let stationsMarker = {};

pinStations = () => {
	return new Promise((resolve, reject) => {
		const county = JSON.parse(read("/data/" + County + ".json"));
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
			{name: station.name, lon: station.lon, lat: station.lat, id: station.id, title: station.name},
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
			{name: station.name, lon: station.lon, lat: station.lat, id: station.id, title: station.name},
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
			{name: station.name, lon: station.lon, lat: station.lat, id: station.id, title: station.name},
			CPILayer
		);
		if (CPILayer === null) {
			CPILayer = marker.layer;
			stationsMarker[station.id] = marker.marker;
		} else
			stationsMarker[station.id] = marker;
	});
}