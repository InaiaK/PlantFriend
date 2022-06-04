const User = require('./User');
const Plant = require('./Plant');
const PlantsSaved = require("./PlantsSaved");
const Zone = require("./Zone");


User.belongsTo(Plant, {
  foreignKey: 'plant_id',
   });

User.hasMany(PlantsSaved, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Plant.hasMany(Zone), {
  foreignKey: 'plant_id'
}

Zone.hasMany(Plant), {
  foreignKey: 'plant_id'
}


module.exports = { User, Plant, Zone, PlantsSaved};
