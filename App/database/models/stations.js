'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stations.belongsTo(models.sdis, {
        foreignKey: 'sdis_id',
        as: 'sdis'
      });

    }
  }
  stations.init({
    type: DataTypes.STRING,
    city: DataTypes.STRING,
    coordinates: DataTypes.GEOMETRY('POINT'),
    sdis_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'stations',
  });
  return stations;
};