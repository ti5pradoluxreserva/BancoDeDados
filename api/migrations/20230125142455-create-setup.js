'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Setups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      shift: {
        type: Sequelize.NUMERIC
      },
      bench: {
        type: Sequelize.STRING
      },
      card_tag_operator: {
        type: Sequelize.STRING
      },
      setup_start_date: {
        type: Sequelize.DATE
      },
      setup_start_time: {
        type: Sequelize.TIME
      },
      setup_end_date: {
        type: Sequelize.DATE
      },
      setup_end_time: {
        type: Sequelize.TIME
      },
      operator_id: {
        type: Sequelize.STRING
      },
      bench_id: {
        type: Sequelize.STRING
      },
      cod: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      FILIAL: {
        type: Sequelize.STRING
      },
      D_E_L_E_T_: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Setups');
  }
};