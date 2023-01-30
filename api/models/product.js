'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    EAN_code: DataTypes.STRING,
    cod: DataTypes.STRING,
    box_number: DataTypes.STRING,
    default_time_cycle: DataTypes.NUMBER,
    description: DataTypes.STRING,
    product_image_name: DataTypes.STRING,
    box_image_name: DataTypes.STRING,
    id: DataTypes.STRING,
    FILIAL: DataTypes.STRING,
    DELET: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};