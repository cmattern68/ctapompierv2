class MissionBoard {
    constructor() {
        this.categories = JSON.parse(read("/data/Categories.json"));
        this.SetSelect();
        this.setOriginaryVehicleTab();
        this.selectedList = {};
    }

    setOriginaryVehicleTab = () => {
        let layout = read("/Layout/VehicleMissionTabLayout.html");
        let currentId = null;
        const endBody = "</tbody>";

        for (const [station_id, station] of Object.entries(Stations)) {
            if (Object.keys(station.vehicles).length > 0) {
                for (const [vehicle_id, vehicle] of Object.entries(station.vehicles)) {
                    const classId = station_id + "-station-vehicles";
                    if (station_id !== currentId) {
                        const startBody = "<tbody class='" + classId + "'>";
                        if (currentId !== null)
                            $('#vehicles-tables').append(endBody)
                        $('#vehicles-tables').append(startBody)
                        currentId = station_id;
                    }
                    let copyLayout = layout;
                    copyLayout = tagToText("{{check_id}}", copyLayout, station_id + "_" + vehicle.id)
                    copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
                    copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
                    copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
                    copyLayout = tagToText("{{station}}", copyLayout, station.city)
                    copyLayout = tagToText("{{vehicle}}", copyLayout, vehicle.name)
                    let i = 0
                    let select = ""
                    console.log()
                    vehicle.vehicle_job.forEach(job => {
                        if (i === 0)
                            select = "<option value='" + Jobs[job].id + "' selected>" + Jobs[job].name + "</option>\n"
                        else
                            select += "<option value='" + Jobs[job].id + "'>" + Jobs[job].name + "</option>\n"
                        ++i;
                    })
                    copyLayout = tagToText("{{options}}", copyLayout, select)
                    copyLayout = tagToText("{{distance}}", copyLayout, "N/A")
                    $('.' + classId).append(copyLayout);
                }
                $('#vehicles-tables').append(endBody)
            }
        }
    }

    SetSubSelect = (value) => {
        if (this.categories.cat[value] !== undefined) {
            let lOption = "#defaultSubCatOption";
            $('#form-subcategorie').find('option').remove().end().append('<option disabled selected value="defaultSubCatOption" id="defaultSubCatOption"> -- Choisissez une Sous-Catégorie -- </option>');
            $('#form-subcategorie').prop("disabled", false);
            this.categories.cat[value].subcat.forEach(categorie => {
                let option = new Option(categorie.label, categorie.id);
                $(option).attr('id', 'subcategorie_' + categorie.id);
                $(lOption).after(option);
                lOption = option;
            });
        }
    }

    SetSelect = () => {
        let lOption = "#defaultCatOption";
        this.categories.cat.forEach(categorie => {
            let option = new Option(categorie.label, categorie.id);
            $(option).attr('id', 'categorie_' + categorie.id);
            $(lOption).after(option);
            lOption = option;

        });
    }

    hoverVehicle = (line) => {
        const arrId = ($(line).attr('id')).split("_");
        const stationId = arrId[0];
        const vehicleId = arrId[1];
        if ($('.' + vehicleId).length > 0) {
            if (line.checked) {
                $('.' + vehicleId).addClass("table-selected");
                Stations[stationId].vehicles[vehicleId].updateStatus(0);
                this.updatedSelectedVehicle(vehicleId, 1);
            } else {
                $('.' + vehicleId).removeClass("table-selected");
                Stations[stationId].vehicles[vehicleId].updateStatus(9);
                this.updatedSelectedVehicle(vehicleId, -1);
            }
        }
    }

    preparedUpdatedSelectedVehicle = (vehicleId) => {
        let isChecked = $("#" + vehicleId + "_check").is(":checked");
        if (isChecked) {
            this.updatedSelectedVehicle(vehicleId, 1)
        }
    }

    updatedSelectedVehicle = (id, add) => {
        let jobId = $("#" + id + "_select").children(":selected").val();
        let spanStr = "";
        if (add === -1)
            delete this.selectedList[id];
        else
            this.selectedList[id] = jobId;
        let tmpJobArray = {}
        for (const [vehicleId, jobId] of Object.entries(this.selectedList)) {
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
                spanStr += nb + " " + Jobs[jobId].name + ", ";
            }
            $(".vehicle-selected-span").text(spanStr.substring(0, spanStr.length - 2));
        } else {
            $(".vehicle-selected-span").text("N/A");
        }
    }

    clean = () => {
        this.SetSelect();
        this.ClearInput();
        $("#vehicles-tables > tbody").each((index, body) => {
            $(body).remove()
        })
        this.setOriginaryVehicleTab();
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
                this.hoverVehicle(vehicleLine)
            }
        }
    }
}

const StatusEnum = Object.freeze({
    // Status Reflexes
    0: {label: "Séléctionné"},
    1: {label: "Parti"},
    2: {label: "Sur les Lieux"},
    3: {label: "Message"},
    4: {label: "Message Urgent"},
    5: {label: "Transport Hôpital"},
    6: {label: "Arrivée Hôpital"},
    7: {label: "Disponible Radio"},
    8: {label: "Indisponible"},
    9: {label: "Disponible"},
    // Groupe Sanitaires
    22: {label: "SMUR sur les Lieux"},
    // Groupe Service Publics
    30: {label: "Police sur les Lieux"},
    31: {label: "Gendarmerie sur les Lieux"},
    32: {label: "ERDF sur les Lieux"},
    33: {label: "GRDF sur les Lieux"},
    34: {label: "DIR sur les Lieux"},
    35: {label: "Conseil Général sur les Lieux"},
    36: {label: "Police Municipale sur les Lieux"},
    37: {label: "Brigades Vertes sur les Lieux"},
    38: {label: "Maire sur les Lieux"},
    // Groupe Génériques
    25: {label: "Disponible Hors Secteur"},
    44: {label: "Disponible sur les Lieux"},
    101: {label: "En Alerte"}
});