class StatBoard {
    constructor() {
        this.current_mission = 0;
        this.current_vehicle_in_mission = 0;
        this.answered_call = 0;
    }

    setMission = (nb) => {
        this.current_mission += nb;
        $('.missions-count').text(" " + this.answered_call);
    }

    setVehicle = (nb) => {
        this.current_vehicle_in_mission += nb;
        $('.vehicles-missions').text(" " + this.answered_call);
    }

    setAnswered = (nb) => {
        this.answered_call += nb;
        $('.call-count').text(" " + this.answered_call);
    }
}