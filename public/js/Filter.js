switchCSP = () => {
	if ($('#switchCSP').is(':checked')) {
		CSPLayer.setOpacity(1.0);
	} else {
		CSPLayer.setOpacity(0.0);
	}
}

switchCIS = () => {
	if ($('#switchCIS').is(':checked')) {
		CISLayer.setOpacity(1.0);
	} else {
		CISLayer.setOpacity(0.0);
	}
}

switchCPI = () => {
	if ($('#switchCPI').is(':checked')) {
		CPILayer.setOpacity(1.0);
	} else {
		CPILayer.setOpacity(0.0);
	}
}

switchCountyBorder = () => {
	if ($('#switchCountyBorder').is(':checked')) {
		delimitCountyBorder().then(res => {
			if ($('#switchBoroughBorder').is(':checked'))
				$('#switchBoroughBorder').trigger('click');
			if ($('#switchCantonBorder').is(':checked'))
				$('#switchCantonBorder').trigger('click');
			if ($('#switchTownBorder').is(':checked'))
				$('#switchTownBorder').trigger('click');
		});
	}
}

switchBoroughBorder = () => {
	if ($('#switchBoroughBorder').is(':checked')) {
		delimitBoroughBorder().then(res => {
			if ($('#switchCountyBorder').is(':checked'))
				$('#switchCountyBorder').trigger('click');
			if ($('#switchCantonBorder').is(':checked'))
				$('#switchCantonBorder').trigger('click');
			if ($('#switchTownBorder').is(':checked'))
				$('#switchTownBorder').trigger('click');
		});
	}
}

switchCantonBorder = () => {
	if ($('#switchCantonBorder').is(':checked')) {
		delimitCantonBorder().then(res => {
			if ($('#switchCountyBorder').is(':checked'))
				$('#switchCountyBorder').trigger('click');
			if ($('#switchBoroughBorder').is(':checked'))
				$('#switchBoroughBorder').trigger('click');
			if ($('#switchTownBorder').is(':checked'))
				$('#switchTownBorder').trigger('click');
		});
	}
}

switchTownBorder = () => {
	if ($('#switchTownBorder').is(':checked')) {
		delimitTownBorder().then(res => {
			if ($('#switchCountyBorder').is(':checked'))
				$('#switchCountyBorder').trigger('click');
			if ($('#switchBoroughBorder').is(':checked'))
				$('#switchBoroughBorder').trigger('click');
			if ($('#switchCantonBorder').is(':checked'))
				$('#switchCantonBorder').trigger('click');
		});
	}
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
	});
	$("#switchBoroughBorder").click(function() {
		switchBoroughBorder();
	});
	$("#switchCantonBorder").click(function() {
		switchCantonBorder();
	});
	$("#switchTownBorder").click(function() {
		switchTownBorder();
	});
});