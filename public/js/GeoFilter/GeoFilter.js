switchCSP = () => {
	if ($('#switchCSP').is(':checked')) {
		for (const [key, station] of Object.entries(Stations)) {
			if (station.type === "csp") {
				station.show();
			}
		}
	} else {
		for (const [key, station] of Object.entries(Stations)) {
			if (station.type === "csp") {
				station.hide();
			}
		}
	}
}

switchCIS = () => {
	if ($('#switchCIS').is(':checked')) {
		for (const [key, station] of Object.entries(Stations)) {
			if (station.type === "cis") {
				station.show();
			}
		}
	} else {
		for (const [key, station] of Object.entries(Stations)) {
			if (station.type === "cis") {
				station.hide();
			}
		}
	}
}

switchCPI = () => {
	if ($('#switchCPI').is(':checked')) {
		for (const [key, station] of Object.entries(Stations)) {
			if (station.type === "cpi") {
				station.show();
			}
		}
	} else {
		for (const [key, station] of Object.entries(Stations)) {
			if (station.type === "cpi") {
				station.hide();
			}
		}
	}
}

switchCountyBorder = () => {
	if ($('#switchCountyBorder').is(':checked')) {
		GeoBorder.delimitCountyBorder();
		if ($('#switchBoroughBorder').is(':checked'))
			$('#switchBoroughBorder').trigger('click');
		if ($('#switchCantonBorder').is(':checked'))
			$('#switchCantonBorder').trigger('click');
		if ($('#switchTownBorder').is(':checked'))
			$('#switchTownBorder').trigger('click');
	}
}

switchBoroughBorder = () => {
	if ($('#switchBoroughBorder').is(':checked')) {
		GeoBorder.delimitBoroughBorder();
		if ($('#switchCountyBorder').is(':checked'))
			$('#switchCountyBorder').trigger('click');
		if ($('#switchCantonBorder').is(':checked'))
			$('#switchCantonBorder').trigger('click');
		if ($('#switchTownBorder').is(':checked'))
			$('#switchTownBorder').trigger('click');
	}
}

switchCantonBorder = () => {
	if ($('#switchCantonBorder').is(':checked')) {
		GeoBorder.delimitCantonBorder();
		if ($('#switchCountyBorder').is(':checked'))
			$('#switchCountyBorder').trigger('click');
		if ($('#switchBoroughBorder').is(':checked'))
			$('#switchBoroughBorder').trigger('click');
		if ($('#switchTownBorder').is(':checked'))
			$('#switchTownBorder').trigger('click');
	}
}

switchTownBorder = () => {
	if ($('#switchTownBorder').is(':checked')) {
		GeoBorder.delimitTownBorder();
		if ($('#switchCountyBorder').is(':checked'))
			$('#switchCountyBorder').trigger('click');
		if ($('#switchBoroughBorder').is(':checked'))
			$('#switchBoroughBorder').trigger('click');
		if ($('#switchCantonBorder').is(':checked'))
			$('#switchCantonBorder').trigger('click');
	}
}

uncheckAllBorder = () => {
	if (!($('#switchCountyBorder').is(':checked')) && !($('#switchBoroughBorder').is(':checked')) && !($('#switchCantonBorder').is(':checked')) && !($('#switchTownBorder').is(':checked')))
		$('#switchCountyBorder').trigger('click');
}

redraw = () => {
	switchCSP();
	switchCIS();
	switchCPI();
	switchCountyBorder();
	switchBoroughBorder();
	switchCantonBorder();
	switchTownBorder();
}

$(document).ready(function() {
	$("#switchCSP").click(function() {
		switchCSP();
	});
	$("#switchCIS").click(function() {
		switchCIS();
	});
	$("#switchCPI").click(function() {
		switchCPI();
	});
	$("#switchCountyBorder").click(function() {
		switchCountyBorder();
		uncheckAllBorder();
	});
	$("#switchBoroughBorder").click(function() {
		switchBoroughBorder();
		uncheckAllBorder();
	});
	$("#switchCantonBorder").click(function() {
		switchCantonBorder();
		uncheckAllBorder();
	});
	$("#switchTownBorder").click(function() {
		switchTownBorder();
		uncheckAllBorder();
	});
});