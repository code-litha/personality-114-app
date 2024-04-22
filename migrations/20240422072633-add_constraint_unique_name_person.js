'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('People', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_name_in_person'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('People', 'unique_name_in_person')
  }
};
