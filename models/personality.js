'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personality.hasMany(models.Person)
      // define association here
    }
  }
  Personality.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Personality',
    tableName: 'Personalities'  // kalau nama tablenya bukan plural dari model namenya
  });
  return Personality;
};