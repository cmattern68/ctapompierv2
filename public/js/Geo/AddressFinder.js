findAddressInCountyPerimeter = () => {

}

getAddressFromApi = async (pos) => {
    await sleep(2000);
    return new Promise(async (resolve, reject) => {
        $.get("https://api-adresse.data.gouv.fr/search/?q=" + County + "&lat=" + pos.lat + "&lon=" + pos.lon, function(address, status) {
            resolve(address);
        });
    });
}

RollAddressPerformer = async () => {
    return new Promise(async (resolve, reject) => {
        let pos = getPosInCountyPerimeter();
        let address = await getAddressFromApi(pos);
        if (address.features.length === 0) {
            RollAddressPerformer().then(address => {
                resolve(address)
            })
        } else {
            if (address.features[0].properties !== undefined) {
                if (parseInt(address.features[0].properties.citycode.substring(0, 2)) === parseInt(County)) {
                    resolve(address.features[0]);
                } else {
                    RollAddressPerformer().then(address => {
                        resolve(address)
                    });
                }
            } else {
                RollAddressPerformer().then(address => {
                    resolve(address)
                });
            }
        }
    });
}

findAddressInCountyPerimeter = () => {
    return new Promise(async (resolve, reject) => {
        resolve(RollAddressPerformer());
    })
}