const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Zone extends Model {}

Zone.init(
  {
    
    zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
 
  
    hardiness_zone: {
      type: DataTypes.STRING,
    },
    temp:{
        type: DataTypes.STRING,

  }},
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'zone',
  }
);

module.exports = Zone;
