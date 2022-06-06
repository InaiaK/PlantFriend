const router = require('express').Router();
const { Plant } = require('../../models');
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

// // GET all plants
// router.get('/', async (req, res) => {
//   try {
//     const plantData = await Plant.findAll({
//       include: [{ model:Plant }, { model: Zone }],
//       attributes: {
//         include: [
//           [
//             // Use plain SQL to get a count of all short books
//             sequelize.literal(
//               '(SELECT SUM(*) FROM plant_name WHERE zone_id BETWEEN 100 AND 300 AND plant_id = zone.id)'
//             ),
//             'Plant',
//           ],
//         ],
//       },
//     });
//     res.status(200).json(plantData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET a single plant
// router.get('/:plant_id', async (req, res) => {
//   try {
//     const plantData = await Plant.findByPk(req.params.id, {
//       include: [{ model:Plant }, { model: Zone }],
//       attributes: {
//         include: [
//           [
//             // Use plain SQL to get a count of all short books
//             sequelize.literal(
//               '(SELECT SUM(*) FROM plant_name WHERE zone_id BETWEEN 100 AND 300 AND plant_id = zone.id)'
//               ),
//               'Plant',
//           ],
//         ],
//       },
//     });

//     if (!plantData) {
//       res.status(404).json({ message: 'No plant found with that id!' });
//       return;
//     }

//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
