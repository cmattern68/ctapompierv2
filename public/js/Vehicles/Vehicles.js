LoadAllVehicles = () => {
    return new Promise((resolve, reject) => {
        let Vehicles = {};
        const vehiclesList = httpGet("http://localhost/equipements");

        for (const [key, new_vehicle] of Object.entries(vehiclesList)) {
            let c_vehicle = new Vehicle(new_vehicle);
            Vehicles[c_vehicle.id] = c_vehicle;
            Stations[c_vehicle.station_id].vehicles[c_vehicle.id] = c_vehicle;
        }
        resolve(Vehicles);
    });
}

SetVehiculeTabStatus = () => {
    const layout = read("/Layout/VehiclesTabLayout.html");
    for ([station_id, station] of Object.entries(Stations)) {
        let copyLayout = layout;
        copyLayout = tagToText("{{station_id}}", copyLayout, station.id)
        copyLayout = tagToText("{{station_name}}", copyLayout, station.city)
        if (Object.keys(station.vehicles).length <= 0) {
            const vehicleList = "<button type=\"button\" class=\"btn btn-status-8 btn-vehicle\" id=\"no-vehicle\" title=\"" + StatusEnum[8].label + "\"'>Aucun véhicule</button>";
            copyLayout = tagToText("{{vehicle_list}}", copyLayout, vehicleList)
            copyLayout = tagToText("{{btn-station-status}}", copyLayout, "btn-station-indispo")
        } else {
            let vehicleList = ""
            for (const [key, vehicle] of Object.entries(station.vehicles)) {
                vehicleList += "<button type=\"button\" class=\"btn btn-vehicle btn-status-" + vehicle.status + "\" id=\"vehicle-" + vehicle.id + "\" title=\"" + StatusEnum[vehicle.status].label + "\"'>" + vehicle.name + "</button>\n";
            }
            copyLayout = tagToText("{{vehicle_list}}", copyLayout, vehicleList)
            copyLayout = tagToText("{{btn-station-status}}", copyLayout, "btn-station-dispo")
        }
        $("#vehicles").append(copyLayout)
    }
}