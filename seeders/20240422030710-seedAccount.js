'use strict';

const { Person } = require('../models/index.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const people = await Person.findAll()
    // console.log(JSON.stringify(people, null, 2))
    const dataAccounts = people.map(person => {
      const username = person.name.split(' ').join('').toLowerCase()

      return {
        email: username + '@hacktiv8.com',
        password: btoa('password'),
        PeopleId: person.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    // console.log(dataAccounts)
    await queryInterface.bulkInsert('Accounts', dataAccounts, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Accounts', null, {})
  }
};
