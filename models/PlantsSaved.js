const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlantsSaved extends Model {}

PlantsSaved.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    plant_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plantsSaved',
  }
);

module.exports = PlantsSaved;
