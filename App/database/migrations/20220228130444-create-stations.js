'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true
      },
      type: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      coordinates: {
        type: Sequelize.GEOMETRY('POINT')
      },
      sdis_id: {
        type: Sequelize.UUID,
        unique: false,
        allowNull: false,
        references: {
          model: 'sdis',
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
    await queryInterface.dropTable('stations');
  }
};