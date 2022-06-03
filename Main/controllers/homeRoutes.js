const router = require('express').Router();
const { User, Plant } = require('../models');
const withAuth = require('../utils/auth');
// utils> withAuth > If the user is not logged in, redirect the request to the HOMEROUTES.



const findPlant = async (zipcode) => {
  // API
  'https://rapidapi.com/fireside-worldwide-fireside-worldwide-default/api/plant-hardiness-zone/${zipcode}';
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
     const plants = plantData.map((plant) => plant.get({ plain: true }));

   // Pass serialized data and session flag into template
     res.render('plant', { 
       plants, 
       logged_in: req.session.logged_in 
     });
   } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
