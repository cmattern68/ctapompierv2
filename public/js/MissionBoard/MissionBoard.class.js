class MissionBoard {
    constructor() {
        this.categories = JSON.parse(read("/data/Categories.json"));
        this.SetSelect();
        this.setOriginaryVehicleTab();
        this.selectedList = {};
        this.missionPos = [];
        this.missionAddress = {};
        this.orderedStationsList = [];
        this.cellsVpcesLink = {}
        this.phone = "";
        this.name = "";
    }

    setOriginaryVehicleTab = () => {
        let layout = read("/Layout/VehicleMissionTabLayout.html");
        let currentId = null;
        const endBody = "</tbody>";

        for (const [station_id, station] of Object.entries(Stations)) {
            if (Object.keys(station.vehicles).length > 0) {
                for (const [vehicle_id, vehicle] of Object.entries(station.vehicles)) {
                    if (vehicle.status === 9) {
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
        const arrId = $(line).attr('id').split("_");
        const stationId = arrId[0];
        const vehicleId = arrId[1];
        if ($('.' + vehicleId).length > 0) {
            if (line.checked) {
                $('.' + vehicleId).addClass("table-selected");
                Stations[stationId].vehicles[vehicleId].updateStatus(0);
                if (Stations[stationId].vehicles[vehicleId].is_cell) {
                    let found = false;
                    console.log("-----------------------------------")
                    for (const [vId, v] of Object.entries(Stations[stationId].vehicles)) {
                        console.log(v.name + ": " + v.status)
                        if (v.carry_cell && v.status === 9) {
                            let elem = $("#" + stationId + "_" + vId + "_check");
                            elem.prop("checked", true)
                            this.cellsVpcesLink[vId] = vehicleId;
                            this.hoverVehicle(elem[0])
                            found = true;
                        }
                    }
                    if (!found) {
                        $('.' + vehicleId).removeClass("table-selected").addClass("table-unavailable");
                    }
                }
                this.updatedSelectedVehicle(vehicleId, 1);
            } else {
                if ($('.' + vehicleId).hasClass("table-selected"));
                    $('.' + vehicleId).removeClass("table-selected");
                if ($('.' + vehicleId).hasClass("table-unavailable"));
                    $('.' + vehicleId).removeClass("table-unavailable");
                Stations[stationId].vehicles[vehicleId].updateStatus(9, "b");
                if ((Stations[stationId].vehicles[vehicleId].is_cell || Stations[stationId].vehicles[vehicleId].carry_cell)
                    && Object.keys(this.cellsVpcesLink).length > 0) {
                    if (this.cellsVpcesLink[vehicleId] === undefined) {
                        console.log("a")
                        for (const [vId,v] of Object.entries(this.cellsVpcesLink)) {
                            if (v === vehicleId) {
                                $("#" + stationId + "_" + vId + "_check").prop("checked", false);
                                if ($('.' + vId).hasClass("table-selected"));
                                $('.' + vId).removeClass("table-selected");
                                if ($('.' + vId).hasClass("table-unavailable"));
                                $('.' + vId).removeClass("table-unavailable");
                                Stations[stationId].vehicles[vId].updateStatus(9);
                                this.updatedSelectedVehicle(vId, -1);
                                delete this.cellsVpcesLink[vehicleId];
                                break;
                            }
                        }
                    } else {
                        $("#" + stationId + "_" + this.cellsVpcesLink[vehicleId] + "_check").prop("checked", false);
                        if ($('.' + this.cellsVpcesLink[vehicleId]).hasClass("table-selected"));
                        $('.' + this.cellsVpcesLink[vehicleId]).removeClass("table-selected");
                        if ($('.' + this.cellsVpcesLink[vehicleId]).hasClass("table-unavailable"));
                        $('.' + this.cellsVpcesLink[vehicleId]).removeClass("table-unavailable");
                        Stations[stationId].vehicles[this.cellsVpcesLink[vehicleId]].updateStatus(9);
                        this.updatedSelectedVehicle(this.cellsVpcesLink[vehicleId], -1);
                        delete this.cellsVpcesLink[vehicleId];
                    }
                }
                this.updatedSelectedVehicle(vehicleId, -1);
            }
        }
    }

    preparedUpdatedSelectedVehicle = (vehicleId) => {
        let stationId = Vehicles[vehicleId].station_id;
        let isChecked = $("#" + stationId + "_" + vehicleId + "_check").is(":checked");
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

    orderByNearest = (missionPos) => {
        this.missionPos = missionPos;
        for (const [stationId, stationDst] of Object.entries(Stations)) {
            let pos = {lon: stationDst.coordinates.coordinates[0], lat: stationDst.coordinates.coordinates[1]}
            let distance = getDistance(pos, this.missionPos);
            let arr = [stationId, distance];
            this.orderedStationsList.push(arr);
        }
        this.orderedStationsList.sort((a, b) => { return a[1] - b[1] });

        let stationElement = [];
        this.orderedStationsList.forEach(station => {
            let stationId = station[0];
            let stationDistance = station[1] + " km";
            const station_prefix = "." + stationId + "-station-vehicles"
            if ($(station_prefix)[0]) {
                let vehiclesKeys = Object.keys(Stations[stationId].vehicles);
                vehiclesKeys.forEach(vehicle => {
                    let vehicleClass = "." + vehicle + "-distance";
                    $(vehicleClass).text(stationDistance);
                })
                stationElement.push($(station_prefix))
            }
        });
        $("#vehicles-tables > tbody").each((index, body) => {
            $(body).remove()
        })
        stationElement.forEach(station => {
            $("#vehicles-tables").append(station)
        })

    }

    setAddress = (address) => {
        this.missionAddress = address.properties;
        let city = this.missionAddress.city;
        let citycode = this.missionAddress.citycode;
        let name = this.missionAddress.name;
        $("#form-city").val(citycode + ", " + city)
        $("#form-address").val(name)
    }

    setPhone = (phone) => {
        this.phone = "+33" + phone;
        $("#form-phonenumber").val(this.phone)
    }

    setName = () => {
        this.name = "MATTERN Corentin";
        $("#form-applicant").val(this.name)
    }

    engage = () => {
        for (const [vehicleId, jobId] of Object.entries(this.selectedList)) {
            const stationId = Vehicles[vehicleId].station_id;
            Stations[stationId].vehicles[vehicleId].updateStatus(101)
            console.log(Stations[stationId].vehicles[vehicleId])
        }
        this.clean(true);
    }

    clean = (newMission = false) => {
        this.SetSelect();
        this.ClearInput(newMission);
        $("#vehicles-tables > tbody").each((index, body) => {
            $(body).remove()
        })
        this.setOriginaryVehicleTab();
        this.selectedList = {};
        this.missionPos = [];
        this.missionAddress = {};
        this.cellsVpcesLink = {}
        this.orderedStationsList = [];
        this.phone = "";
        this.name = "";
    }

    ClearInput = (newMission = false) => {
        $('#form-subcategorie').val("defaultSubCatOption").change();
        $('#form-subcategorie').prop("disabled", true);
        $('#form-categorie').val("defaultCatOption").change();
        $("#form-applicant").val("");
        $("#form-phonenumber").val("");
        $("#form-city").val("");
        $("#form-address").val("");
        $("#form-observations").val("");
        $(".btn-srv").prop("checked", false)
        const checkbox = $(".emploi_check:checkbox:checked")
        if (!newMission) {
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