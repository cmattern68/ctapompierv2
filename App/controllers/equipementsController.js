const validationResult = require('express-validator').validationResult;
const models = require('../database/models');

exports.get = (req, res) =>
{
    models.vehicles_stations.findAll({
        attributes: ['id', 'name', 'status'],
        order: [['vehicle_station', 'DESC'], ['name', 'ASC']],
        include: [
            {
                model: models.stations,
                as: "stations",
                required: true,
                attributes: ['id', 'type', 'city', 'coordinates'],
            },
            {
                model: models.vehicle_types,
                as: "vehicle_types",
                required: true,
                attributes: ['type', 'label', 'carry_trailer', 'carry_cell','is_trailer', 'is_cell'],
                include: [
                    {
                        model: models.vehicle_type_jobs,
                        as: "vehicle_type_jobs",
                        required: true,
                        attributes: ['id'],
                        include: [
                            {
                                model: models.vehicle_job,
                                as: "vehicle_type_jobs",
                                required: true,
                                attributes: ['id', 'name', 'staff', 'weight']
                            }
                        ]
                    }
                ]
            }
        ]
    }).then(vehicles => {
        let vehiclesArray = [];
        vehicles.forEach(vehicle => {
            let vehicleFormatted = {
                id: vehicle.id,
                name: vehicle.name,
                status: vehicle.status,
                stations: {
                    id: vehicle.stations.id,
                    type: vehicle.stations.type,
                    name: vehicle.stations.city,
                    coordinates: vehicle.stations.coordinates
                },
                carry_trailer: vehicle.vehicle_types.carry_trailer,
                carry_cell: vehicle.vehicle_types.carry_cell,
                is_trailer: vehicle.vehicle_types.is_trailer,
                is_cell: vehicle.vehicle_types.is_cell,
                vehicle_job: {}
            };
            vehicle.vehicle_types.vehicle_type_jobs.forEach(job => {
                vehicleFormatted.vehicle_job[job.vehicle_type_jobs.weight] = job.vehicle_type_jobs;
            });
            vehiclesArray.push(vehicleFormatted);
        });
        return res.status(200).json(vehiclesArray)
    }).catch(err => {
        return res.status(400).json({ vehicles: null })
    })
}

exports.getJobs = (req, res) => {
    models.vehicle_job.findAll({
        attributes: ['id', 'name', 'staff', 'weight']
    }).then(job => {
        return res.status(200).json(job);
    }).catch(err => {
        return res.status(400).json({ job: null })
    })
}