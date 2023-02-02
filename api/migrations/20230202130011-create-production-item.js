'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('production_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      card_tag_operator: {
        type: Sequelize.STRING
      },
      seq_prod: {
        type: Sequelize.NUMERIC
      },
      created_date: {
        type: Sequelize.DATE
      },
      created_time: {
        type: Sequelize.TIME
      },
      current_cycle_date: {
        type: Sequelize.DATE
      },
      current_cycle_time: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('production_items');
  }
};