const ApiKey = "df272389183b47389919435bd2244190";

getAddressFromApi = (pos) => {
	return new Promise((resolve, reject) => {
		$.get("https://api-adresse.data.gouv.fr/search/?q=" + County + "&lat=" + pos.lat + "&lon=" + pos.lon, function(address, status) {
			resolve(address);
		});
	});
}

performAddress = async (address) => {
	while (true) {
		let pos = getPosInCountyPerimeter(true);
		address = await getAddressFromApi(pos);
		if (address.features.length > 0 && parseInt((address.features[0].properties.citycode).substring(0, 2)) === County) {
			return address;
		}
	}
}

getAddressFromPos = async (pos) => {
	LoadInProgress = true;
	const LoadLayout = read("Layout/LoadLayout.html");
	$(LoadLayout).insertBefore($('.btn-msg-next'));
	let address = await getAddressFromApi(pos);
	if (address.features.length === 0 || parseInt((address.features[0].properties.citycode).substring(0, 2)) !== County)
		address = await performAddress(address);
	$('.load-address').remove();
	return address;
}

getPosInCountyPerimeter = (t = false) => {
	if (CountyBorderLayer !== null) {
		let coordinate = CountyBorderLayer.features[0].geometry.getBounds();
		if (!t) {
			coordinate = coordinate.transform('EPSG:3857', 'EPSG:4326');
		}
		const east = coordinate.right;
		const west = coordinate.left;
		const south = coordinate.bottom;
		const north = coordinate.top;
		const lat = north + (Math.random() * (south - north));
		const lon = west + (Math.random() * (east - west));
		return ({lon: lon, lat: lat});
	}
}