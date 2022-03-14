'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sdis', [
      { id: "d1cf4d0f-d7f1-40a6-be07-04616b017969", name: "SIS 68", full_name: "Service d'Incendie et de Secours du Haut-Rhin", categorie: 'B', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sdis', null, {});
  }
};
