const User = require('./User');
const Plant = require('./Plant');
const PlantList = require('./PlantList');

User.hasMany(Plant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Plant.belongsTo(User, {
  foreignKey: 'user_id'
});


Plant.belongsTo(PlantList, {
  foreignKey: 'user_id'
});

// CONFIRM 2 or 3 TABLES WITH TA 

// User.hasMany(Plant, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });


module.exports = { User, Plant, PlantList};
