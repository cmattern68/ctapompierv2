'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicle_types.hasMany(models.vehicles_stations, {
        foreignKey: 'vehicle_type',
        as: 'vehicles_stations'
      });
      vehicle_types.hasMany(models.vehicle_type_jobs, {
        foreignKey: 'vehicle_type',
        as: 'vehicle_type_jobs'
      });

    }
  }
  vehicle_types.init({
    type: DataTypes.STRING,
    label: DataTypes.STRING,
    carry_trailer: DataTypes.BOOLEAN,
    carry_cell: DataTypes.BOOLEAN,
    is_trailer: DataTypes.BOOLEAN,
    is_cell: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'vehicle_types',
  });
  return vehicle_types;
};