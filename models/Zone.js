const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Zone extends Model { }

Zone.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    zone_id: {
      type: DataTypes.STRING,
      allowNull: false,
         },

    plant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'zone',
  }
);

module.exports = Zone;
