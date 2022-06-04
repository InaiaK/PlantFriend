const User = require('./User');
const Plant = require('./Plant');
const PlantList = require('./PlantList');
const PlantsSaved = require("./PlantsSaved");
const Zone = require("./Zone");

User.belongsTo(Zone, {
  foreignKey: 'zone_id',
   });

Zone.hasmany(User, {
  foreignKey: 'zone_id'
});


// Plant.belongsTo(PlantList, {
//   foreignKey: 'user_id'
// });
//-----
Plant.hasmany(Zone, {
  foreignKey:"plant_id",
through:'PlantsSaved'});

Zone.hasmany(Plant, {
  foreignKey:"zone_id",
through:'PlantsSaved'});
// CONFIRM 2 or 3 TABLES WITH TA 

// User.hasMany(Plant, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });
_

module.exports = { User, Plant, PlantList};
