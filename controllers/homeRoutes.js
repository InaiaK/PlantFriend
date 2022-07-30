const router = require('express').Router();
const { render, json } = require('express/lib/response');
const { Plant, User, PlantsSaved, Zone} = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const { request } = require('http');


router.get('/', async (req, res) => {
  try {
    res.render("register")
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/results', async (req, res) => {
  try {
    //console.log()
    const userData = await User.findByPk(
      req.session.user_id

    )
    console.log("++++++++++++++")
    console.log(req.user)
    console.log("===============")

    res.render('results', {
      message: "Hello", user: req.user

      // DATA NEEDS TO GO HERE
      //  userData
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/results/:hz', async (req, res) => {
  try {
    //console.log()
    // const userData = await User.findByPk(
    //   req.session.user_id

      const response = await Zone.findAll({
        where: {
          zone_id: (req, param.hz)
        }
      });

    const allZones = response.json()
console.log(allZones)
    
    console.log("++++++++++++++")
    console.log(req.user)
    console.log("===============")



    res.render('results', {
      message: "Hello", user: req.user

      // DATA NEEDS TO GO HERE
      //  userData
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// let zipcode = 80123 // req.session.zipcode || 80123
//     const options = {
//       method: 'GET',
//       url: `https://usda-plant-hardiness-zones.p.rapidapi.com/zone/${zipcode}`,
//       headers: {
//         'X-RapidAPI-Host': 'usda-plant-hardiness-zones.p.rapidapi.com',
//         'X-RapidAPI-Key': 'bf6c21b426msh0cd3146563ed98bp1607b3jsn6fa55e43e23c'
//       }
//     };
//     axios.request(options).then(function (response) {
//       console.log(response.data);
//     }).catch(function (error) {
//       console.error(error);
//     });
// });



router.get('/favorites', async (req, res) => {
  try {
    res.render('favorites', {
      layout: 'index',
      // DATA NEEDS TO GO HERE
      resultsArray: [{ plant_name: 'Fern' }, { plant_name: 'Zzz Plant' }],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', {
      layout: 'index',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', async (req, res) => {
  try {
    res.render('register', {
      layout: 'index',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
