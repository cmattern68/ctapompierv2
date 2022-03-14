const validationResult = require('express-validator').validationResult;
const models = require('../database/models');

exports.get = (req, res) =>
{
    models.stations.findAll().then(stations => {
        let type = {}
        stations.forEach(station => {
            console.log(station["type"])
            if (!type.hasOwnProperty(station["type"])) {
                type[station["type"]] = []
            }
           type[station["type"]].push(station)
        });
        return res.status(200).json(type)
    }).catch(err => {
        return res.status(400).json({ stations: null })
    })
}