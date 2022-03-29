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
	Usage: drawMarker({x: x, y: y}, Path, {name: Name, lon: Lon, lat: Lat, id: Id, title: Title});
 */

drawMarker = (size, iconPath, Marker, layer) => {
	const iconSize = new OpenLayers.Size(size.x, size.y);
	const iconOffset = new OpenLayers.Pixel(-(iconSize.w/2), -iconSize.h);
	const Icon = new OpenLayers.Icon(iconPath, iconSize, iconOffset);
	let Layer = null;
	if (layer === null || layer === undefined)
		Layer = new OpenLayers.Layer.Markers(Marker.name + "_Layer");
	else
		Layer = layer;
	map.addLayer(Layer);
	const pinnedMarker = new OpenLayers.Marker(new OpenLayers.LonLat(Marker.lon, Marker.lat).transform('EPSG:4326', 'EPSG:3857'), Icon);
	pinnedMarker.icon.imageDiv.setAttribute("id", Marker.id);
	pinnedMarker.icon.imageDiv.setAttribute("title", Marker.title);
	Layer.addMarker(pinnedMarker);
	if (layer === null || layer === undefined)
		return {marker: pinnedMarker, layer: Layer};
	else
		return pinnedMarker;
};

/*
	Usage: zoomOnPos({lon: lon, lat: lat}, level);
 */

zoomOnPos = (pos, level) => {
	map.setCenter(new OpenLayers.LonLat(pos.lon, pos.lat).transform('EPSG:4326', 'EPSG:3857'), level);
	redraw();
}