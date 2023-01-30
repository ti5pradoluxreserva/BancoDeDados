'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EAN_code: {
        type: Sequelize.STRING
      },
      cod: {
        type: Sequelize.STRING
      },
      box_number: {
        type: Sequelize.STRING
      },
      default_time_cycle: {
        type: Sequelize.NUMERIC
      },
      description: {
        type: Sequelize.STRING
      },
      product_image_name: {
        type: Sequelize.STRING
      },
      box_image_name: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING
      },
      FILIAL: {
        type: Sequelize.STRING
      },
      DELET: {
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
    await queryInterface.dropTable('Products');
  }
};