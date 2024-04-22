'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Person, {
        foreignKey: 'PeopleId'
      })
    }
  }
  Account.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    PeopleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Account',
    hooks: {
      beforeValidate: function (instance, options) {
        // Method 1 via the .init() method
        console.log(`------ ini beforeValidate menggunakan method 1 ------`)
      }
    }
  });

  Account.addHook('beforeCreate', function (instance, options) {
    // Method 2 via addHook
    console.log(`------ ini beforeCreate menggunakan method 2 -----`)
    instance.password = btoa(instance.password)

  })

  Account.afterCreate(function(instance, options) {
    // method 3 via direct
    console.log(`------ ini afterCreate menggunakan method 3 ------`)

  })

  return Account;
};
