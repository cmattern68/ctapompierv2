const categories = JSON.parse(read("/data/Categories.json"));
let city = null;

getStationsDistances = (coordinates) => {
	let stationsDistancesFromMission = {};
	let sortable = [];

	stationsArray.forEach(station => {
		let stationCoordinate = {lon: station.coordinates.coordinates[0], lat: station.coordinates.coordinates[1]};
		let stationId = station.id;
		let distance = getDistance(stationCoordinate, coordinates)
		stationsDistancesFromMission[stationId] = parseFloat(distance);
	})
	for (let vehicle in stationsDistancesFromMission) {
		sortable.push([vehicle, stationsDistancesFromMission[vehicle]]);
	}
	sortable.sort(function(a, b) {
		return a[1] - b[1];
	});
	return sortable;
}

updateVehicleDistances = (distancesArray) => {
	vehiclesArray.forEach(vehicle => {
		const distance_prefix = "." + vehicle.id + "-distance";
		let distance = "";

		if ($(distance_prefix)[0]) {
			distancesArray.forEach(station => {
				if (station[0] === vehicle.stations.id) {
					distance = station[1] + " km";
					$(distance_prefix).text(distance);
					return;
				}
			})
		}
	});
}

updateStationsOrder = (stationsCoordinates) => {
	let stationElement = [];
	stationsCoordinates.forEach(stationDistance => {
		stationsArray.forEach(station => {
			if (station.id === stationDistance[0]) {
				const station_prefix = "." + station.id + "-station-vehicles"
				if ($(station_prefix)[0]) {
					stationElement.push($(station_prefix))
				}
			}
		});
	});
	$("#vehicles-tables > tbody").each((index, body) => {
		$(body).remove()
	})
	stationElement.forEach(station => {
		$("#vehicles-tables").append(station)
	})
}

updateDistances = (coordinates) => {
	let stationsCoordinates = getStationsDistances(coordinates);
	updateVehicleDistances(stationsCoordinates)
	updateStationsOrder(stationsCoordinates);
}

cleanMissionBoard = () => {
	ClearInput();
	$("#vehicles-tables > tbody").each((index, body) => {
		$(body).remove()
	})
	fillMissionTabVehicleTable();
}

hoverTr = (line) => {
	let id = ($(line).attr('id')).split("_");
	if ($('.' + id[0]).length > 0) {
		if (line.checked) {
			$('.' + id[0]).addClass("table-selected");
			updateVehicleStatus(0, id)
		} else {
			$('.' + id[0]).removeClass("table-selected");
			updateVehicleStatus(9, id)
		}
	}
}

ClearInput = () => {
	$('#form-subcategorie').val("defaultSubCatOption").change();
	$('#form-subcategorie').prop("disabled", true);
	$('#form-categorie').val("defaultCatOption").change();
	$("#form-applicant").val("");
	$("#form-phonenumber").val("");
	$("#form-city").val("");
	$("#form-address").val("");
	$("#form-observations").val("");
	const checkbox = $(".emploi_check:checkbox:checked")
	for (const [key, vehicleLine] of Object.entries(checkbox)) {
		if (typeof(vehicleLine) === "object" && vehicleLine.name === "emploi_check") {
			const vehicle_id = $(vehicleLine).attr( "id")
			$("#" + vehicle_id).prop("checked", false)
			const t = $("#" + vehicle_id)
			hoverTr(vehicleLine)
		}
	}
}

SetSubSelect = (value) => {
	if (categories.cat[value] !== undefined) {
		let lOption = "#defaultSubCatOption";
		$('#form-subcategorie').find('option').remove().end().append('<option disabled selected value="defaultSubCatOption" id="defaultSubCatOption"> -- Choisissez une Sous-Catégorie -- </option>');
		$('#form-subcategorie').prop("disabled", false);
		categories.cat[value].subcat.forEach(categorie => {
			let option = new Option(categorie.label, categorie.id);
			$(option).attr('id', 'subcategorie_' + categorie.id);
			$(lOption).after(option);
			lOption = option;
		});
	}
}

SetSelect = () => {
	let lOption = "#defaultCatOption";
	categories.cat.forEach(categorie => {
		let option = new Option(categorie.label, categorie.id);
		$(option).attr('id', 'categorie_' + categorie.id);
		$(lOption).after(option);
		lOption = option;
	});
}

MissionCreator = () => {
	return new Promise((resolve, reject) => {
		SetSelect();
		resolve("MissionCreator");
	});
}

$(document).ready(function() {
	$("#form-categorie").change(function() {
		let value = $(this).find("option:selected").attr("value");
		SetSubSelect(value);
	});
});

$(document).on("change", "input[name=emploi_check]", function() {
	hoverTr(this);
});

