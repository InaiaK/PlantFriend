const User = require('./User');
const Plant = require('./Plant');
const PlantsSaved = require("./PlantsSaved");
const Zone = require("./Zone");

User.belongsTo(Zone, {
  foreignKey: 'zone_id',
   });

Zone.hasMany(User, {
  foreignKey: 'zone_id'
});


// Plant.belongsTo(PlantList, {
//   foreignKey: 'user_id'
// });
//-----
Plant.belongsToMany(Zone, {
  foreignKey:"plant_id",
through:'PlantsSaved'});

Zone.belongsToMany(Plant, {
  foreignKey:"zone_id",
through:'PlantsSaved'});
// CONFIRM 2 or 3 TABLES WITH TA 

// User.hasMany(Plant, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });


module.exports = { User, Plant, Zone, PlantsSaved};
