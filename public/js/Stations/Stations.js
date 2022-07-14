initStations = (county) => {
    return new Promise((resolve, reject) => {
        let Stations = {};
        const typeStationsList = httpGet("http://localhost/stations?county=" + county);
        for (const [key, typeStationArr] of Object.entries(typeStationsList)) {
            typeStationArr.forEach(station => {
                Stations[station.id] = new Station(station);
            })
        }
        resolve(Stations);
    });
}