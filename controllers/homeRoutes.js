const router = require('express').Router();
const { render, json } = require('express/lib/response');
const { Plant, User, PlantsSaved} = require('../models');
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
    // fix here to console the data
    console.log("++++++++++++++")
    console.log(req.user)
    console.log("===============")

    res.render('results', {
      message:"Hello",user:req.user

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
