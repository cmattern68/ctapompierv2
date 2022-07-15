CreateMissionBoard = () => {
    MissionBoardPanel = new MissionBoard();
}

$(document).ready(function() {
    $("#cancel-engagement").click(function() {
        if (call !== null)
            call.cancel();
        MissionBoardPanel.clean();
    });
    $("#engage").click(function() {
        if (call !== null) {
            call.cancel();
            MissionBoardPanel.engage();
        }
    });
    $("#form-categorie").change(function() {
        let value = $(this).find("option:selected").attr("value");
        MissionBoardPanel.SetSubSelect(value);
    });
});

$(document).on("change", "input[name=emploi_check]", function() {
    const vehicleId = $(this).attr("id").split("_")[0];
    const stationId = Vehicles[vehicleId].station_id;
    MissionBoardPanel.SelectVehicle(vehicleId, stationId, this.checked);
});

$(document).on("change", ".select-vehicles-job", function() {
    let vehicleId = $(this).attr("id").split("_")[0];
    MissionBoardPanel.preparedUpdatedSelectedVehicle(vehicleId);
});