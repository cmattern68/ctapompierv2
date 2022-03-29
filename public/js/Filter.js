switchCSP = () => {
	if ($('#switchCSP').is(':checked')) {
		showCSP()
	} else {
		hideCSP()
	}
}

switchCIS = () => {
	if ($('#switchCIS').is(':checked')) {
		showCIS()
	} else {
		hideCIS()
	}
}

switchCPI = () => {
	if ($('#switchCPI').is(':checked')) {
		showCPI()
	} else {
		hideCPI()
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

allBorderUnchecked = () => {
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
		allBorderUnchecked();
	});
	$("#switchBoroughBorder").click(function() {
		switchBoroughBorder();
		allBorderUnchecked();
	});
	$("#switchCantonBorder").click(function() {
		switchCantonBorder();
		allBorderUnchecked();
	});
	$("#switchTownBorder").click(function() {
		switchTownBorder();
		allBorderUnchecked();
	});
});