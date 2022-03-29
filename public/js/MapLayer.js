let map, infoWindow;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 47.5815041, lng: 7.2441099 },
		zoom: 9,
	});
	infoWindow = new google.maps.InfoWindow();
}

/*
	Usage: drawGeojson(Path, {strokeWidth: Width,	strokeColor: Color, fillColor: Color, fillOpacity: Opacity});
 */

drawGeojson = (path) => {
	map.data.loadGeoJson(path)
	map.data.setStyle({strokeColor: '#34495e', fillColor: '#34495e', fillOpacity: 0.0});
};

clearGeoJson = () => {
	map.data.forEach(function(feature) {
		map.data.remove(feature);
	});
}

/*
	Usage: drawMarker({x: x, y: y}, Path, {name: Name, lon: Lon, lat: Lat, id: Id});
 */

drawMarker = (size, iconPath, Marker, layer) => {
	const icon = { icon: new google.maps.MarkerImage(iconPath) };
	const position = { position: new google.maps.LatLng(parseFloat(Marker.lat), parseFloat(Marker.lon)) };
	const marker = new google.maps.Marker({
		position: position.position,
		icon: icon.icon,
		map: map,
		title: Marker.name
	});
	return marker;
};

/*
	Usage: zoomOnPos({lon: lon, lat: lat}, level);
 */

zoomOnPos = (pos, level) => {
	map.setCenter(new OpenLayers.LonLat(pos.lon, pos.lat).transform('EPSG:4326', 'EPSG:3857'), level);
	redraw();
}