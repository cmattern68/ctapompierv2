/*
 * GLOBAL VARIABLES FOR ALL PROJECT
 */

let County = "";
let GeoBorder = {};
let Stations = {};
let callInProgress = false;
let callPreparing = false;
let call = null;
let Stats = {}
let MissionBoardPanel = {}
let Jobs = {}
let Vehicles = {}

/*
 * END GLOBAL VARIABLES FOR ALL PROJECT
 */

class Lobby {
    constructor(county) {
        County = county;
        GeoBorder = new Border(County);
        initStations(County)
            .then((stations) => {
                Stations = stations;
                LoadAllVehicles().then((vehicles) => {
                    Vehicles = vehicles;
                    LoadAllJobs().then((jobs) => {
                        Jobs = jobs;
                        CreateMissionBoard();
                        setStatBoard();
                        SetVehiculeTabStatus();
                    }).catch(() => {});
                }).catch(() => {});
            }).catch(() => {});
    }

    run = async () => {
        while (true) {
            await sleep(1000);
            ManageCall()
        }
    }
}