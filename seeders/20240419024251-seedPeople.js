'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{
      name : 'Ardi',
      gender : 'Male',
      address : 'BSD',
      firstCrush : 'Angewomon',
      PersonalityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Akmal',
      gender : 'Male',
      address : 'Curug',
      firstCrush : 'Sakura Haruno',
      PersonalityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Badzlin',
      gender : 'Male',
      address : 'BSD',
      firstCrush : 'Mavis',
      PersonalityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Balqis',
      gender : 'Female',
      address : 'Parung Panjang',
      firstCrush : 'Taehyung',
      PersonalityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Ery',
      gender : 'Male',
      address : 'Cipondoh',
      firstCrush : 'Tsunade',
      PersonalityId : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Simson',
      gender : 'Male',
      address : 'Jombang',
      firstCrush : 'Hinata',
      PersonalityId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personalities', null, {})
  }
};
