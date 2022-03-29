'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vehicle_job.hasMany(models.vehicle_type_jobs, {
        foreignKey: 'vehicle_job',
        as: 'vehicle_type_jobs'
      });
    }
  }
  vehicle_job.init({
    name: DataTypes.STRING,
    staff: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicle_job',
  });
  return vehicle_job;
};