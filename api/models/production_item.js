'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class production_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      production_item.belongsTo(models.Product, {
        foreignKey:'_id',
        primaryKey: true
      })
    }
  }
  production_item.init({
    card_tag_operator: DataTypes.STRING,
    seq_prod: DataTypes.NUMERIC,
    created_date: DataTypes.DATE,
    created_time: DataTypes.TIME,
    current_cycle_date: DataTypes.DATE,
    current_cycle_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'production_item',
  });
  return production_item;
};