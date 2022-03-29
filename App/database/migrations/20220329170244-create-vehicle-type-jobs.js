'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_type_jobs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true
      },
      vehicle_job: {
        type: Sequelize.UUID,
        unique: false,
        allowNull: false,
        references: {
          model: 'vehicle_jobs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      vehicle_type: {
        type: Sequelize.UUID,
        unique: false,
        allowNull: false,
        references: {
          model: 'vehicle_types',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('vehicle_type_jobs');
  }
};