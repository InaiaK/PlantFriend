const router = require('express').Router();
const { User, Plant } = require('../models');
const withAuth = require('../utils/auth');
// utils> withAuth > If the user is not logged in, redirect the request to the HOMEROUTES.

  // Get all PLANTS and JOIN with user data
 router.get('/', withAuth, async (req, res) => {

   try {
      const plantData = await Plant.findAll({
       include: [
        {
          model: User,
          attributes: ['username','zipcode','id'],
         },
      ],
    });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       projects, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


const findPlant = async (zipcode) => {
  // API
  'https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcodes}';
};
  
  
router.get('/plant/:zipcode', async (req, res) => {
 try {
     const id = req.params.id; 
     const plantResponse = plantFunction(re.params.zipcode);
      include: [
        {
          model: Plant,
          attributes: ['hardiness_zone', 'plant_id', 'name'],
        },
      ],
    });

    const plant = plantData.get({ plain: true });
// WHEN LOGIN IS DONE, USER GOES TO THE SECOND PAGE.
     res.render('plant', {
       ...plantResponse,
      logged_in: req.session.logged_in
    });
   } catch (err) {
    res.status(500).json(err);
  }
 });

module.exports = router;
