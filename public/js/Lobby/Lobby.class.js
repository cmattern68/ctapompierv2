/*
 * GLOBAL VARIABLES FOR ALL PROJECT
 */

let County = "";
let GeoBorder = {};
let Stations = {};
let callInProgress = false;
let call = null;
let callAnswered = 0;
let Missions = {}

/*
 * END GLOBAL VARIABLES FOR ALL PROJECT
 */

class Lobby {
    constructor(county) {
        County = county;
        GeoBorder = new Border(County)
        initStations(County)
            .then((stations) => {
                Stations = stations;
            }).catch(() => {
        })
    }

    run = async () => {
        while (true) {
            await new Promise(r => setTimeout(r, 1000));
            ManageCall()
        }
    }
}