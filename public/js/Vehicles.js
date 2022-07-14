let vehiclesArray = {}
let jobsArray = {}
let vehiclesStation = {}
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

loadVehicles = () => {
    return new Promise((resolve, reject) => {
        let vehiclesList = httpGet("http://localhost/equipements?county=" + County);
        let jobsList = httpGet("http://localhost/equipements/jobs");
        vehiclesList.forEach(vehicle => {
            vehiclesArray[vehicle.id] = vehicle;
        })
        jobsList.forEach(job => {
            jobsArray[job.id] = job;
        })
        groupByStation()
        fillMissionTabVehicleTable();
        fillVehicleTabVehicleTable();
        resolve("loadVehicles");
    });
}

groupByStation = () => {
    for (const [key, vehicle] of Object.entries(vehiclesArray)) {
        if (vehiclesStation[vehicle.stations.id] === undefined)
            vehiclesStation[vehicle.stations.id] = [];
        vehiclesStation[vehicle.stations.id].push(vehicle);
    };
}

updateVehicleStatus = (status, id) => {
    let classList = $("#vehicle-" + id).attr("class").split(" ");
    let tgClass = ""
    let tgKey, i = 0;
    vehiclesArray[id].status = status;
    vehiclesStation[vehiclesArray[id].stations.id].forEach(val => {
        if (val.id === id)
            tgKey = i;
        ++i;
    })
    vehiclesStation[vehiclesArray[id].stations.id][tgKey].status = status;
    classList.forEach(_class => {
        if (_class.match("btn-status-") != null) {
            tgClass = _class
            return
        }
    })
    $("#vehicle-" + id).removeClass(tgClass).addClass("btn-status-" + status).prop('title', StatusEnum[status].label);

}

fillVehicleTabVehicleTable = () => {
    const layout = read("/Layout/VehiclesTabLayout.html");
    stationsArray.forEach(station => {
        let copyLayout = layout;
        copyLayout = tagToText("{{station_id}}", copyLayout, station.id)
        copyLayout = tagToText("{{station_name}}", copyLayout, station.city)
        if (vehiclesStation[station.id] == undefined) {
            const vehicleList = "<button type=\"button\" class=\"btn btn-status-8 btn-vehicle\" id=\"no-vehicle\" title=\"" + StatusEnum[8].label + "\"'>Aucun véhicule</button>";
            copyLayout = tagToText("{{vehicle_list}}", copyLayout, vehicleList)
            copyLayout = tagToText("{{btn-station-status}}", copyLayout, "btn-station-indispo")
        } else {
            let vehicleList = ""
            for (const [key, vehicle] of Object.entries(vehiclesStation[station.id])) {
                vehicleList += "<button type=\"button\" class=\"btn btn-vehicle btn-status-" + vehicle.status + "\" id=\"vehicle-" + vehicle.id + "\" title=\"" + StatusEnum[vehicle.status].label + "\"'>" + vehicle.name + "</button>\n";
            }
            copyLayout = tagToText("{{vehicle_list}}", copyLayout, vehicleList)
            copyLayout = tagToText("{{btn-station-status}}", copyLayout, "btn-station-dispo")
        }
        $("#vehicles").append(copyLayout)
    });
}

fillMissionTabVehicleTable = () => {
    let layout = read("/Layout/VehicleMissionTabLayout.html");
    let currentId = "";
    const endBody = "</tbody>";

    for (const [key, vehicle] of Object.entries(vehiclesArray)) {
        const classId = vehicle.stations.id + "-station-vehicles";
        if (vehicle.stations.id !== currentId) {
            const startBody = "<tbody class='" + classId + "'>";
            if (currentId !== "")
                $('#vehicles-tables').append(endBody)
            $('#vehicles-tables').append(startBody)
            currentId = vehicle.stations.id;
        }
        let copyLayout = layout;
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{station}}", copyLayout, vehicle.stations.name)
        copyLayout = tagToText("{{vehicle}}", copyLayout, vehicle.name)
        let jobI = 0
        let select = ""
        for (const [key, job] of Object.entries(vehicle.vehicle_job)) {
            if (jobI === 0)
                select = "<option value='" + job.id + "' selected>" + job.name + "</option>\n"
            else
                select += "<option value='" + job.id + "'>" + job.name + "</option>\n"
            ++jobI;
        }
        copyLayout = tagToText("{{options}}", copyLayout, select)
        copyLayout = tagToText("{{distance}}", copyLayout, "N/A")
        $('.' + classId).append(copyLayout);
    };
    $('#vehicles-tables').append(endBody)
}