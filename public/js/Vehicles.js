let vehiclesArray = []
const StatusEnum = Object.freeze({
    // Status Reflexes
    1: {label: "Parti", bgColor: "", txtColor: "", borderColor: ""},
    2: {label: "Sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    3: {label: "Message", bgColor: "", txtColor: "", borderColor: ""},
    4: {label: "Message Urgent", bgColor: "", txtColor: "", borderColor: ""},
    5: {label: "Transport Hôpital", bgColor: "", txtColor: "", borderColor: ""},
    6: {label: "Arrivée Hôpital", bgColor: "", txtColor: "", borderColor: ""},
    7: {label: "Disponible Radio", bgColor: "", txtColor: "", borderColor: ""},
    8: {label: "Indisponible", bgColor: "", txtColor: "", borderColor: ""},
    9: {label: "Disponible", bgColor: "", txtColor: "", borderColor: ""},
    // Groupe Sanitaires
    22: {label: "SMUR sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    // Groupe Service Publics
    30: {label: "Police sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    31: {label: "Gendarmerie sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    32: {label: "ERDF sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    33: {label: "GRDF sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    34: {label: "DIR sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    35: {label: "Conseil Général sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    36: {label: "Police Municipale sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    37: {label: "Brigades Vertes sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    38: {label: "Maire sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
    // Groupe Génériques
    25: {label: "Disponible Hors Secteur", bgColor: "", txtColor: "", borderColor: ""},
    44: {label: "Disponible sur les Lieux", bgColor: "", txtColor: "", borderColor: ""},
});

loadVehicles = () => {
    return new Promise((resolve, reject) => {
        vehiclesArray = httpGet("http://localhost/equipements?county=" + County);
        fillVehicleTable();
        resolve("loadVehicles");
    });
}

fillVehicleTable = () => {
    let layout = read("/Layout/VehicleLayout.html");
    let currentId = "";
    const endBody = "</tbody>";
    vehiclesArray.forEach(vehicle => {
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
    });
    $('#vehicles-tables').append(endBody)
}