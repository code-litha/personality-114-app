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
      Person.hasMany(models.Account, {
        foreignKey: 'PeopleId'
      })
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `name already exists`
      },
      validate: {
        notEmpty: {
          msg: `name can't be empty`
        },
        notNull: {
          msg: `name can't be null`
        },
        len: {
          args: [5],
          msg: `name is minimal 5 characters`
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `gender can't be empty`
        },
        notNull: {
          msg: `gender can't be null`
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `address can't be empty`
        },
        notNull: {
          msg: `address can't be null`
        },
        isAddressH8 (value) {
          if (!value.toLowerCase().includes('hacktiv8')) {
            throw new Error(`Address must be include 'hacktiv8`)
          }
        }
      }
    },
    firstCrush: {
      type: DataTypes.STRING,
    },
    PersonalityId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Person'
  });

  return Person;
};