'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setup.init({
    date: DataTypes.DATE,
    shift: DataTypes.NUMERIC,
    bench: DataTypes.STRING,
    card_tag_operator: DataTypes.STRING,
    setup_start_date: DataTypes.DATE,
    setup_start_time: DataTypes.TIME,
    setup_end_date: DataTypes.DATE,
    setup_end_time: DataTypes.TIME,
    operator_id: DataTypes.STRING,
    bench_id: DataTypes.STRING,
    cod: DataTypes.STRING,
    id: {primaryKey:true, type: DataTypes.STRING},
    FILIAL: DataTypes.STRING,
    D_E_L_E_T_: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Setup',
  });
  return Setup;
};