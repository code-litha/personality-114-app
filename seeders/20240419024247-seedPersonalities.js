'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personalities', [
      {
        name : 'Introvert',
        description : 'Introvert adalah salah satu jenis kepribadian yang lebih senang meluangkan waktu sendiri untuk mengumpulkan energinya, merasa lebih nyaman berfokus pada pemikiran dan batin mereka sendiri, dan menikmati menghabiskan waktu dengan satu atau dua orang saja.',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Ekstrovert',
        description : 'Ekstrovert adalah sebutan untuk seseorang yang cenderung mendapatkan energi dan kepuasan dari interaksi sosial dan lingkungan sekitarnya. Mereka merasa energik dan nyaman dalam keramaian, sehingga mudah bagi mereka untuk berbagi pikiran maupun pendapat secara cuma-cuma.',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personalities', null, {})
  }
};
