class MissionBoard {
    constructor() {
        this.categories = JSON.parse(read("/data/Categories.json"));
        this.names = read("/data/name.csv").split("\n")
        this.names.shift()
        this.SetSelect();
        this.setOriginaryVehicleTab();
        this.selectedCat = null;
        this.selectedSubCat = null;
        this.selectedList= {};
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
        let dispo_status = [0, 7, 9, 25, 44]

        for (const [station_id, station] of Object.entries(Stations)) {
            if (Object.keys(station.vehicles).length > 0) {
                for (const [vehicle_id, vehicle] of Object.entries(station.vehicles)) {
                    if (dispo_status.includes(vehicle.status)) {
                        const classId = station_id + "-station-vehicles";
                        if (station_id !== currentId) {
                            const startBody = "<tbody class='" + classId + "'>";
                            if (currentId !== null)
                                $('#vehicles-tables').append(endBody)
                            $('#vehicles-tables').append(startBody)
                            currentId = station_id;
                        }
                        let copyLayout = layout;
                        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
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

    SetNominalDeparture = (subCatId) => {
        this.selectedSubCat = subCatId;
        let dispo_status = [0, 7, 9, 25, 44]
        if (callInProgress && !callPreparing && call !== null && this.selectedCat !== null
            && this.selectedSubCat !== null && this.orderedStationsList.length > 0) {
            this.setSelectedVehiclesAvailable();
            let nominalJobs = this.categories.cat[this.selectedCat].subcat[this.selectedSubCat].nominal_jobs;
            if (nominalJobs !== null) {
                nominalJobs.forEach(jobsObj => {
                    for (const [jobId, neededNb] of Object.entries(jobsObj)) {
                        let foundCount = 0;
                        let BreakException = {};
                        try {
                            this.orderedStationsList.forEach(station => {
                                const stationId = station[0];
                                if (foundCount !== neededNb) {
                                    for (const [vehicleId, vehicle] of Object.entries(Stations[stationId].vehicles)) {
                                        if (Vehicles[vehicleId].vehicle_job.includes(jobId) && foundCount !== neededNb
                                        && dispo_status.includes(Stations[stationId].vehicles[vehicleId].status)) {
                                            let check = $("#" + vehicleId + "_check");
                                            if (!check[0].checked) {
                                                ++foundCount;
                                                check.trigger("click")
                                                $("#" + vehicleId + "_select").val(jobId).change();
                                            }
                                        } else if (foundCount === neededNb)
                                            break;
                                    }
                                } else
                                    throw BreakException
                            });
                        } catch {}
                    }
                });
            }
        }
    }

    SetNominalDepartureFromLocationProcess = () => {
        const subCatValue = $("#form-subcategorie").find("option:selected").attr("value");
        if (subCatValue !== "defaultSubCatOption")
            this.SetNominalDeparture(subCatValue);
    }

    SetSubSelect = (value) => {
        this.selectedCat = value;
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

    setSelectedVehiclesAvailable = () => {
        for (const [station_id, station] of Object.entries(Stations)) {
            for (const [vehicle_id, vehicle] of Object.entries(station.vehicles)) {
                if (vehicle.status === 0) {
                    let lineCheck = $("#" + vehicle_id + "_check");
                    if (lineCheck[0].checked)
                        lineCheck.trigger("click");
                }
            }
        }
    }

    SetVehicleLineStatus = (StationId, VehicleId, status) => {
        let line = $("." + VehicleId);
        if (line.is('[class*="table-status-"]')) {
            line.attr("class").split(" ").forEach(classname => {
                if (classname.includes("table-status-")) {
                    if (classname !== "table-status-" + StatusEnum[status].tbClass) {
                        line.removeClass(classname);
                    }
                }
            })
        }
        line.addClass("table-status-" + StatusEnum[status].tbClass)
        Stations[StationId].vehicles[VehicleId].updateStatus(status);
        this.updatedSelectedVehicle(VehicleId, status === 0 ? (1) : (-1))
    }

    SelectVPCE = (StationId, VehicleId) => {
        if (Stations[StationId].vehicles[VehicleId].is_cell) {
            let found = false;
            for (const [vpceId, vpce] of Object.entries(Stations[StationId].vehicles)) {
                if (vpce.carry_cell && vpce.status === 9) {
                    found = true;
                    $("#" + vpceId + "_check").trigger("click");
                    this.cellsVpcesLink[vpceId] = VehicleId;
                } else if (vpce.carry_cell && vpce.status === 0) {
                    if (this.cellsVpcesLink[vpceId] === undefined) {
                        let checkbox = $("#" + vpceId + "_check");
                        found = true;
                        if (!checkbox[0].checked)
                            $("#" + vpceId + "_check").trigger("click");
                        this.cellsVpcesLink[vpceId] = VehicleId;
                    }
                }
            }
            if(!found) {
                this.SetVehicleLineStatus(StationId, VehicleId, 8);
            }
        }
    }

    UnSelectVPCE = (StationId, VehicleId) => {
        if (Stations[StationId].vehicles[VehicleId].is_cell || Stations[StationId].vehicles[VehicleId].carry_cell) {
            if (this.cellsVpcesLink[VehicleId] === undefined) {
                for (const [vpce_id, cell_id] of Object.entries(this.cellsVpcesLink)) {
                    if (cell_id === VehicleId) {
                        let checkbox = $("#" + vpce_id + "_check");
                        if (checkbox[0].checked)
                            checkbox.trigger("click");
                        delete this.cellsVpcesLink[vpce_id];
                    }
                }
            } else {
                let checkbox = $("#" + this.cellsVpcesLink[VehicleId] + "_check");
                if (checkbox[0].checked)
                    checkbox.trigger("click");
                delete this.cellsVpcesLink[VehicleId];
            }
        }
    }

    SelectVehicle = (VehicleId, StationId, select) => {
        if (select) {
            this.SetVehicleLineStatus(StationId, VehicleId, 0);
            this.SelectVPCE(StationId, VehicleId);
        } else {
            this.SetVehicleLineStatus(StationId, VehicleId, 9);
            this.UnSelectVPCE(StationId, VehicleId);
        }
    }

    preparedUpdatedSelectedVehicle = (vehicleId) => {
        let isChecked = $("#" + vehicleId + "_check").is(":checked");
        let stationId = Vehicles[vehicleId].station_id;
        if (isChecked) {
            this.updatedSelectedVehicle(vehicleId, Stations[stationId].vehicles[vehicleId].status === 0 ? (1) : (-1))
        }
    }

    updatedSelectedVehicle = (id, add) => {
        let jobId = $("#" + id + "_select").children(":selected").val();
        let spanStr = "";

        if (add < 0 && this.selectedList[id] !== undefined) {
            delete this.selectedList[id]
        } else if (add > 0)
            this.selectedList[id] = jobId;
        let selectCntTmp = {};
        for (const [vehicleId, jobId] of Object.entries(this.selectedList)) {
            if (selectCntTmp[jobId] === undefined)
                selectCntTmp[jobId] = 1;
            else
                selectCntTmp[jobId] += 1
        }

        let selected = $(".vehicle-selected-span");
        if (Object.keys(selectCntTmp).length > 0) {
            for (const [job_id, selected_count] of Object.entries(selectCntTmp)) {
                spanStr += selected_count + " " + Jobs[job_id].name + ", ";
            }
            spanStr = spanStr.slice(0, spanStr.length - 2);
            selected.text(spanStr)
        } else {
            selected.text("N/A");
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
        const nameId = getRandomInt(this.names.length)
        const name = this.names[nameId].split(',');
        this.name = name[1] + " " + name[0]
        $("#form-applicant").val(this.name)
    }

    engage = () => {
        Stats.setMission(1);
        for (const [vehicleId, jobId] of Object.entries(this.selectedList)) {
            const stationId = Vehicles[vehicleId].station_id;
            Stations[stationId].vehicles[vehicleId].updateStatus(101)
        }
        this.clean();
    }

    clean = () => {
        this.ClearInput();
        $("#vehicles-tables > tbody").each((index, body) => {
            $(body).remove()
        })
        this.setOriginaryVehicleTab();
        this.selectedCat = null;
        this.selectedSubCat = null;
        this.selectedList = {};
        this.missionPos = [];
        this.missionAddress = {};
        this.cellsVpcesLink = {}
        this.orderedStationsList = [];
        this.phone = "";
        this.name = "";
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
        $(".btn-srv").prop("checked", false)
        $(".vehicle-selected-span").text("N/A");
        this.setSelectedVehiclesAvailable();
    }
}

const StatusEnum = Object.freeze({
    // Status Reflexes
    0: {label: "Séléctionné", tbClass: "selected"},
    1: {label: "Parti", tbClass: "hiden"},
    2: {label: "Sur les Lieux", tbClass: "hiden"},
    3: {label: "Message", tbClass: "hiden"},
    4: {label: "Message Urgent", tbClass: "hiden"},
    5: {label: "Transport Hôpital", tbClass: "hiden"},
    6: {label: "Arrivée Hôpital", tbClass: "hiden"},
    7: {label: "Disponible Radio", tbClass: "hiden"},
    8: {label: "Indisponible", tbClass: "unavailable"},
    9: {label: "Disponible", tbClass: "available"},
    // Groupe Sanitaires
    22: {label: "SMUR sur les Lieux", tbClass: "hiden"},
    // Groupe Service Publics
    30: {label: "Police sur les Lieux", tbClass: "hiden"},
    31: {label: "Gendarmerie sur les Lieux", tbClass: "hiden"},
    32: {label: "ERDF sur les Lieux", tbClass: "hiden"},
    33: {label: "GRDF sur les Lieux", tbClass: "hiden"},
    34: {label: "DIR sur les Lieux", tbClass: "hiden"},
    35: {label: "Conseil Général sur les Lieux", tbClass: "hiden"},
    36: {label: "Police Municipale sur les Lieux", tbClass: "hiden"},
    37: {label: "Brigades Vertes sur les Lieux", tbClass: "hiden"},
    38: {label: "Maire sur les Lieux", tbClass: "hiden"},
    // Groupe Génériques
    25: {label: "Disponible Hors Secteur", tbClass: "hiden"},
    44: {label: "Disponible sur les Lieux", tbClass: "hiden"},
    101: {label: "En Alerte", tbClass: "hiden"}
});