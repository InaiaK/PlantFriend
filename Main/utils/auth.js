const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the HOMEROUTES.
  if (!req.session.logged_in) {
    res.redirect('/homeroutes.js');
  } else {
    next();
  }
};

module.exports = withAuth;
