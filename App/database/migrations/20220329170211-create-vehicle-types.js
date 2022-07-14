'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_types', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true
      },
      type: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      carry_trailer: {
        type: Sequelize.BOOLEAN
      },
      carry_cell: {
        type: Sequelize.BOOLEAN
      },
      is_trailer: {
        type: Sequelize.BOOLEAN
      },
      is_cell: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('vehicle_types');
  }
};