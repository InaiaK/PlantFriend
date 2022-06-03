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
 
  
  
  zone_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Zone",
     key: "zone_id", 


  }},
  plant_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "plant",
     key: "plant_id", 
    }

  }},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plantsSaved',
  },

);

module.exports = PlantsSaved;
