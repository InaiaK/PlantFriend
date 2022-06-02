// // edit
// const router = require('express').Router();
// const { Zipcode } = require('../../models');

// router.post('/', async (req, res) => {
//   try {
//     const zipData = await Zipcode.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.zipcode = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//     try {
//       const zipData = await User.findOne({ where: { zipcode: req.body.zipcode } });
  
//       if (!userzip) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect zipcode ,please try again' });
//         return;
//       }
  
//       const validPassword = await userData.checkPassword(req.body.password);
  
//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect zipcode or password, please try again'});
//         return;
//       }
  
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
        
//         res.json({ user: userData, message: 'You are now logged in!' });
//       });
  
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });