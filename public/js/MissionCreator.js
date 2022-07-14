const categories = JSON.parse(read("/data/Categories.json"));
let city = null;
let selectedArray = {}

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
	for (const [key, vehicle] of Object.entries(vehiclesArray)) {
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
	};
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

updatedSelectedVehicle = (id, add) => {
	let jobId = $("#" + id + "_select").children(":selected").val();
	let spanStr = "";
	if (add == -1)
		delete selectedArray[id];
	else
		selectedArray[id] = jobId;
	let tmpJobArray = {}
	console.log()
	for (const [vehicleId, jobId] of Object.entries(selectedArray)) {
		if (tmpJobArray[jobId] === undefined)
			tmpJobArray[jobId] = 1;
		else {
			if (tmpJobArray[jobId] >= 0)
				tmpJobArray[jobId] += add;
			if (tmpJobArray[jobId] < 0)
				tmpJobArray[jobId] = 0;
		}
	}
	if (Object.keys(tmpJobArray).length > 0) {
		for (const [jobId, nb] of Object.entries(tmpJobArray)) {
			spanStr += nb + " " + jobsArray[jobId].name + ", ";
		}
		$(".vehicle-selected-span").text(spanStr.substring(0, spanStr.length - 2));
	} else {
		$(".vehicle-selected-span").text("N/A");
	}
}

selectVPCE = (id) => {
	const vehicle = vehiclesArray[id];
	const stationId = vehicle.stations.id;
	const stationsVehicle = vehiclesStation[stationId];
	stationsVehicle.forEach(stationVehicle => {
		if (stationVehicle.carry_cell) {
			if (stationVehicle.status === 9) {
				$('.' + stationVehicle.id).addClass("table-selected");
				$('#' + stationVehicle.id + "_check").prop("checked", true);
				updateVehicleStatus(0, stationVehicle.id);
				updatedSelectedVehicle(stationVehicle.id, 1);
			} else {
				$('.' + id).removeClass("table-selected").addClass("table-unavailable");
				$('.' + stationVehicle.id).addClass("table-selected");
			}
		}
	});
}

unSelectVPCE = (id) => {
	const vehicle = vehiclesArray[id];
	const stationId = vehicle.stations.id;
	const stationsVehicle = vehiclesStation[stationId];
	stationsVehicle.forEach(stationVehicle => {
		if (stationVehicle.carry_cell) {
			if (stationVehicle.status !== 9) {
				console.log($('.' + stationVehicle.id))
				$('.' + stationVehicle.id).remove("table-selected");
				console.log($('.' + stationVehicle.id))
				$('#' + stationVehicle.id + "_check").prop("checked", false);
				updateVehicleStatus(9, stationVehicle.id);
				updatedSelectedVehicle(stationVehicle.id, -1);
			}
		}
	});
}

isTrailerOrCellToSelect = (id) => {
	if (vehiclesArray[id].is_trailer)
		console.log("Is Trailer")
	else if (vehiclesArray[id].is_cell)
		selectVPCE(id)
}

isTrailerOrCellToUnSelect = (id) => {
	if (vehiclesArray[id].is_trailer)
		console.log("Is Trailer")
	else if (vehiclesArray[id].is_cell)
		unSelectVPCE(id)
}

preparedUpdatedSelectedVehicle = (jobId, vehicleId) => {
	let isChecked = $("#" + vehicleId + "_check").is(":checked");
	if (isChecked) {
		updatedSelectedVehicle(vehicleId, 1)
	}
}

cleanMissionBoard = () => {
	selectedArray = {}
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
			isTrailerOrCellToSelect(id[0]);
			updateVehicleStatus(0, id[0])
			updatedSelectedVehicle(id[0], 1);
		} else {
			$('.' + id[0]).removeClass("table-selected").removeClass("table-unavailable");
			isTrailerOrCellToUnSelect(id[0]);
			updateVehicleStatus(9, id[0]);
			updatedSelectedVehicle(id[0], -1);
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

$(document).on("change", ".select-vehicles-job", function() {
	let jobId = $(this).find("option:selected").attr("value");
	let vehicleId = $(this).attr("id").split("_")[0];
	preparedUpdatedSelectedVehicle(jobId, vehicleId)
});

$(document).on("change", "input[name=emploi_check]", function() {
	hoverTr(this);
});

