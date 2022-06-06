const router = require('express').Router();
const { render } = require('express/lib/response');
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
    console.log(req.session.user_id)
    const userData = await User.findByPk(
        req.session.user_id

    )
    console.log(userData)
    res.render('results', {

      // DATA NEEDS TO GO HERE
      userData
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
