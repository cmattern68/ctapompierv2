class Border {
    constructor(county) {
        this.county = "geojson/county/" + county + ".geojson"
        this.borough = "geojson/borough/" + county + ".geojson"
        this.canton = "geojson/canton/" + county + ".geojson"
        this.town = "geojson/town/" + county + ".geojson"
        this.delimitCountyBorder();
    }

    delimitCountyBorder = () => {
        this.clear();
        drawGeojson(this.county);
    }

    delimitBoroughBorder = () => {
        this.clear();
        drawGeojson(this.borough);
    }

    delimitCantonBorder = () => {
        this.clear();
        drawGeojson(this.canton);
    }

    delimitTownBorder = () => {
        this.clear();
        drawGeojson(this.town);
    }

    delimitBorder = () => {
        this.clear();
        drawGeojson();
    }

    clear = () => {
        clearGeoJson()
    }
}