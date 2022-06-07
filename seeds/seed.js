const sequelize = require('../config/connection');
const { User, Plant, Zone, PlantsSaved } = require('../models');

const userData = require('./userData.json');

const plantData = require('./plantseeds.json');
const zoneData = require('./zoneseeds.json');
const plantSavedData = require('./plantsavedseed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const plant of plantData) {
    await Plant.create({ ...plant });
  }
  for (const zone of zoneData) {
    await Zone.create({ ...zone });
  }
  for (const plantSaved of plantSavedData) {
    await PlantsSaved.create({ ...plantSaved });
  }

  process.exit(0);
};

seedDatabase();
