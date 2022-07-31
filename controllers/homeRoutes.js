const router = require('express').Router();
const { render, json } = require('express/lib/response');
const fetch = require('node-fetch')
const { Plant, User, PlantsSaved, Zone} = require('../models');
const { QueryTypes } = require('sequelize');
const withAuth = require('../utils/auth');
const path = require('path');
const { sequelize } = require('../models/User');
const { request } = require('http');


router.get('/', async (req, res) => {
  try {
    res.render("register")
  } catch (err) {
    res.status(500).json(err);
  }
});

async function getHardinessZone(zip) {
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
    }}
    
    const response = await fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zip}`, options)
    const apiZone = await response.json()
    const query = `select p.name from plant p join zone z on z.plant_id=p.plant_id WHERE z.zone_id='${apiZone.hardiness_zone}';`;
    const queryResult = await sequelize.query(query, {
        type: QueryTypes.SELECT,
        plain: false,
        raw: true,
      });
    return queryResult
}

router.get('/results', async (req, res) => {
  try {
    const userData = await User.findByPk(
      req.session.user_id

    )
    console.log(JSON.stringify(userData))
    const plants = await getHardinessZone(userData.zipcode);
    console.log(`hardinessResults ${JSON.stringify(plants)}`)
    res.render('results', {
      plants
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
