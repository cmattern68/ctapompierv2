'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicles_stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicles_stations.belongsTo(models.vehicle_types, {
        foreignKey: 'vehicle_type',
        as: 'vehicle_types'
      });
      vehicles_stations.belongsTo(models.stations, {
        foreignKey: 'vehicle_station',
        as: 'stations'
      });
    }
  }
  vehicles_stations.init({
    vehicle_type: DataTypes.UUID,
    vehicle_station: DataTypes.UUID,
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicles_stations',
  });
  return vehicles_stations;
};