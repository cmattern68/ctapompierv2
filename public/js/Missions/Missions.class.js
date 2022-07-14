class Mission {
    constructor(call) {
        this.call = call;
        const mission = JSON.parse(read("/missions/1.json"));
        this.id = mission.id;
        this.name = mission.name;
        this.dialog = mission.dialog;
    }
}