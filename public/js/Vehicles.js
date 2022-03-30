let vehiclesArray = []

loadVehicles = () => {
    return new Promise((resolve, reject) => {
        vehiclesArray = httpGet("http://localhost/equipements?county=" + County);
        fillVehicleTable();
        resolve("loadVehicles");
    });
}

fillVehicleTable = () => {
    let layout = read("/Layout/VehicleLayout.html");
    vehiclesArray.forEach(vehicle => {
        let copyLayout = layout;
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{id}}", copyLayout, vehicle.id)
        copyLayout = tagToText("{{station}}", copyLayout, vehicle.stations.name)
        copyLayout = tagToText("{{vehicle}}", copyLayout, vehicle.name)
        let jobI = 0
        let select = ""
        vehicle.vehicle_job.forEach(job => {
            if (jobI === 0)
                select = "<option value='" + job.id + "' selected>" + job.name + "</option>\n"
            else
                select += "<option value='" + job.id + "'>" + job.name + "</option>\n"
            ++jobI;
        });
        copyLayout = tagToText("{{options}}", copyLayout, select)
        copyLayout = tagToText("{{distance}}", copyLayout, "N/A")
        $('.vehicle_body').append(copyLayout);
    });
}