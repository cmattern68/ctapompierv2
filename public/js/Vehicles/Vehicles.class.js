class Vehicle {
    constructor(vehicle) {
        this.id = vehicle.id;
        this.name = vehicle.name;
        this.status = vehicle.status;
        this.carry_trailer = vehicle.carry_trailer;
        this.carry_cell = vehicle.carry_cell;
        this.is_trailer = vehicle.is_trailer;
        this.is_cell = vehicle.is_cell;
        this.station_id = vehicle.stations.id;
        this.vehicle_job = []
        for (const [key, job] of Object.entries(vehicle.vehicle_job)) {
            this.vehicle_job.push(job.id);
        }
    }

    updateStatus = (status) => {
        let classList = $("#vehicle-" + this.id).attr("class").split(" ");
        let tgClass = ""
        classList.forEach(_class => {
            if (_class.match("btn-status-") != null) {
                tgClass = _class
                return
            }
        });
        $("#vehicle-" + this.id).removeClass(tgClass).addClass("btn-status-" + status).prop('title', StatusEnum[status].label);
        this.status = status;
    }
}