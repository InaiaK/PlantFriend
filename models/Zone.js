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
    
 
  
    plant_id: {
      type: DataTypes.INTERGER,
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
