class Station {
    constructor(station) {
        this.id = station.id
        this.type = station.type
        this.city = station.city
        this.coordinates = station.coordinates
        this.sdis_id = station.sdis_id
        this.marker = null;
        this.draw()
    }

    draw = () => {
        this.marker = drawMarker(
            {x: 16, y: 16},
            "/assets/" + this.type + ".png",
            {name: this.city, lon: this.coordinates.coordinates[0], lat: this.coordinates.coordinates[1], id: this.id}
        );
    }

    show = (type) => {
        this.marker.setMap(map);
    }

    hide = (type) => {
        this.marker.setMap(null);
    }
}