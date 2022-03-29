'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_jobs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      staff: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle_jobs');
  }
};