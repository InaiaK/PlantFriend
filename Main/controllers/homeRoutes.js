const router = require('express').Router();
const {  User } = require('../models');
const withAuth = require('../utils/auth');


 router.get('/', withAuth, async (req, res) => {

   try {
//     // Get all projects and JOIN with user data
//     const projectData = await Project.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

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

// const findPlant = async (zipcode) => {

// // url
// }

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

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/plant');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
