const router = require('express').Router();
const { render } = require('express/lib/response');
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');

router.get('/', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/results', async (req, res) => {
  try {
    res.render('results', {
      layout: 'index',
      // DATA NEEDS TO GO HERE
      resultsArray: [{ plant_name: 'Fern' }, { plant_name: 'Zzz Plant' }],
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
