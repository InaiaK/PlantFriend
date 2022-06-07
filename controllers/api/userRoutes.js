const router = require('express').Router();
const { User } = require('../../models');

//CREATE A USER
router.post('/', async (req, res) => {
  try {
    console.log('call to add user');
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.zipcode = userData.zipcode

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// FIND ONE USER + VALID PASSWORD
router.post('/login', async (req, res) => {
  try {
    console.log('Logging user in');
    console.table(req.body);
    const userData = await User.findOne({
      where: { email: req.body.email },
    });
    console.log('Got here');
    console.table(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    } else {
      console.log(`Found User ${req.body.email}`);
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    } else {
      console.log(`Password for user ${req.body.username} is correct `);
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
      console.log('User is logged in');
      //function // insert zipcode URL ???????
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
