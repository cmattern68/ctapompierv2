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
		CountyBorderLayer.style = borderDisplayStyle;
		if ($('#switchBoroughBorder').is(':checked'))
			$('#switchBoroughBorder').trigger('click');
		if ($('#switchCantonBorder').is(':checked'))
			$('#switchCantonBorder').trigger('click');
		if ($('#switchTownBorder').is(':checked'))
			$('#switchTownBorder').trigger('click');
	} else {
		CountyBorderLayer.style = borderInvisibleStyle;
	}
	CountyBorderLayer.refresh();
}

switchBoroughBorder = () => {
	if ($('#switchBoroughBorder').is(':checked')) {
		BoroughBorderLayer.style = borderDisplayStyle;
		if ($('#switchCountyBorder').is(':checked'))
			$('#switchCountyBorder').trigger('click');
		if ($('#switchCantonBorder').is(':checked'))
			$('#switchCantonBorder').trigger('click');
		if ($('#switchTownBorder').is(':checked'))
			$('#switchTownBorder').trigger('click');
	} else {
		BoroughBorderLayer.style = borderInvisibleStyle;
	}
	BoroughBorderLayer.refresh();
}

switchCantonBorder = () => {
	if ($('#switchCantonBorder').is(':checked')) {
		CantonBorderLayer.style = borderDisplayStyle;
		if ($('#switchCountyBorder').is(':checked'))
			$('#switchCountyBorder').trigger('click');
		if ($('#switchBoroughBorder').is(':checked'))
			$('#switchBoroughBorder').trigger('click');
		if ($('#switchTownBorder').is(':checked'))
			$('#switchTownBorder').trigger('click');
	} else {
		CantonBorderLayer.style = borderInvisibleStyle;
	}
	CantonBorderLayer.refresh();
}

switchTownBorder = () => {
	if ($('#switchTownBorder').is(':checked')) {
		TownBorderLayer.style = borderDisplayStyle;
		if ($('#switchCountyBorder').is(':checked'))
			$('#switchCountyBorder').trigger('click');
		if ($('#switchBoroughBorder').is(':checked'))
			$('#switchBoroughBorder').trigger('click');
		if ($('#switchCantonBorder').is(':checked'))
			$('#switchCantonBorder').trigger('click');
	} else {
		TownBorderLayer.style = borderInvisibleStyle;
	}
	TownBorderLayer.refresh();
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