let CSPArray = [];
let CISArray = [];
let CPIArray = [];
let stationsArray = {"csp": [], "cis": [], "cpi": []};

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
		stationsArray["csp"].push(marker);
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
		stationsArray["cis"].push(marker);
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
		stationsArray["cpi"].push(marker);
	});
}

showCSP = () => {
	stationsArray["csp"].forEach(csp => {
		csp.setMap(map);
	});
}

showCIS = () => {
	stationsArray["cis"].forEach(cis => {
		cis.setMap(map);
	});
}

showCPI = () => {
	stationsArray["cpi"].forEach(cpi => {
		cpi.setMap(map);
	});
}

hideCSP = () => {
	stationsArray["csp"].forEach(csp => {
		csp.setMap(null);
	});
}

hideCIS = () => {
	stationsArray["cis"].forEach(cis => {
		cis.setMap(null);
	});
}

hideCPI = () => {
	stationsArray["cpi"].forEach(cpi => {
		cpi.setMap(null);
	});
}