'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_type_jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicle_type_jobs.belongsTo(models.vehicle_job, {
        foreignKey: 'vehicle_job',
        as: 'vehicle_job'
      });
      vehicle_type_jobs.belongsTo(models.vehicle_types, {
        foreignKey: 'vehicle_type',
        as: 'vehicle_types'
      });
    }
  }
  vehicle_type_jobs.init({
    vehicle_job: DataTypes.UUID,
    vehicle_type: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'vehicle_type_jobs',
  });
  return vehicle_type_jobs;
};