'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    getTitle(){
      if(this.gender === 'Male') return `Mr. ${this.name}`
      return `Mrs. ${this.name}`
    }

    static associate(models) {
      Person.belongsTo(models.Personality)
      // define association here
    }
  }
  Person.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    firstCrush: DataTypes.STRING,
    PersonalityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Person',
    
  });

  return Person;
};