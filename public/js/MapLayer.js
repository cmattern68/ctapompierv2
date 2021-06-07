let map = new OpenLayers.Map({
	div: "map",
	layers: [
		new OpenLayers.Layer.OSM("OSM (without buffer)"),
		new OpenLayers.Layer.OSM("OSM (with buffer)", null, {buffer: 2})
	],
	center: new OpenLayers.LonLat(7.2441099, 47.5815041).transform('EPSG:4326', 'EPSG:3857'),
	zoom: 9
});

/*
	Usage: drawGeojson(Path, {strokeWidth: Width,	strokeColor: Color, fillColor: Color, fillOpacity: Opacity});
 */

drawGeojson = (path, style) => {
	const vector = new OpenLayers.Layer.Vector("GeoJSON", {
		projection: "EPSG:4326",
		strategies: [new OpenLayers.Strategy.Fixed()],
		protocol: new OpenLayers.Protocol.HTTP({
			url: path,
			format: new OpenLayers.Format.GeoJSON()
		})
	});
	vector.style = style;
	map.addLayer(vector);
	return vector;
};

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
}