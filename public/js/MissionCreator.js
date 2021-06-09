const categories = JSON.parse(read("/data/Categories.json"));
let city = null;

hoverTr = (line) => {
	let id = ($(line).attr('id')).split("-");
	if ($('.' + id[0]).length > 0) {
		if (line.checked) {
			$('.' + id[0]).addClass("table-success");
		} else {
			$('.' + id[0]).removeClass("table-success");
		}
	}
}

ClearInput = () => {
	$('#form-subcategorie').val("defaultSubCatOption").change();
	$('#form-subcategorie').prop("disabled", true);
	$('#form-categorie').val("defaultCatOption").change();
	$("#form-city").val("");
	$("#form-address").val("");
	$("#form-observations").val("");
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
	$(".emploi_check").change(function() {
		hoverTr(this);
	});
});

