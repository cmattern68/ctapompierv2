'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sdis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sdis.hasMany(models.stations, {
        as: 'stations',
        foreignKey: 'sdis_id'
      });
    }
  }
  sdis.init({
    name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    categorie: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'sdis',
  });
  return sdis;
};