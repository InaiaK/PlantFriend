const router = require('express').Router();
const { Plant} = require('../../models');
const withAuth = require('../../utils/auth');


// SELECT/CREATE A PLANT TO YOUR LIST.
router.post('/', withAuth, async (req, res) => {
  try {
    const newPlant = await Plant.create({
      ...req.body,
      plant_id: req.session.plant_id,
    });

    res.status(200).json(newPlant);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE PLANT SAVED 
router.delete('/plantssaved/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
        plant_id: req.session.plant_id,
      },
    });

    if (!PlantData) {
      res.status(404).json({ message: 'No Plant found with this id!' });
      return;
    }

    res.status(200).json(PlantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
