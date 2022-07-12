let CSPArray = [];
let CISArray = [];
let CPIArray = [];
let stationsArray = [];
let stationsMarkerArray = {"csp": [], "cis": [], "cpi": []};

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
			{name: station.city, lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1], id: station.id},
			CSPArray
		);
		CSPArray.push(marker);
		stationsMarkerArray["csp"].push(marker);
		stationsArray.push(station);
	});
}

drawCIS = (cis) => {
	cis.forEach(station => {
		const marker = drawMarker(
			{x: 16, y: 16},
			"/assets/cis.png",
			{name: station.city, lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1], id: station.id},
			CISArray
		);
		CISArray.push(marker);
		stationsMarkerArray["cis"].push(marker);
		stationsArray.push(station);
	});
}

drawCPI = (cpi) => {
	cpi.forEach(station => {
		const marker = drawMarker(
			{x: 16, y: 16},
			"/assets/cpi.png",
			{name: station.city, lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1], id: station.id},
			CPIArray
		);
		CPIArray.push(marker);
		stationsMarkerArray["cpi"].push(marker);
		stationsArray.push(station);
	});
}

showCSP = () => {
	stationsMarkerArray["csp"].forEach(csp => {
		csp.setMap(map);
	});
}

showCIS = () => {
	stationsMarkerArray["cis"].forEach(cis => {
		cis.setMap(map);
	});
}

showCPI = () => {
	stationsMarkerArray["cpi"].forEach(cpi => {
		cpi.setMap(map);
	});
}

hideCSP = () => {
	stationsMarkerArray["csp"].forEach(csp => {
		csp.setMap(null);
	});
}

hideCIS = () => {
	stationsMarkerArray["cis"].forEach(cis => {
		cis.setMap(null);
	});
}

hideCPI = () => {
	stationsMarkerArray["cpi"].forEach(cpi => {
		cpi.setMap(null);
	});
}