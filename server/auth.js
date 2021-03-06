'use strict';
const router = require('express').Router();
const uuidv4 = require('uuid/v4');

const fakeDB = {
  user: {
    email: '',
    loginIdentifier: ''
  }
};

router.post('/verify/:id', (req, res, next) => {
  // this POST comes from Alythia after the app scan
  const reqEmail = req.body.email;

  //
  //FindOrCreate here!
  //
  fakeDB.user.loginIdentifier = uuidv4();
  fakeDB.user.email = reqEmail;

  const dbEmail = fakeDB.user.email;

  if (dbEmail == reqEmail) {
    res.json({ loginIdentifier: fakeDB.user.loginIdentifier });
  } else {
    res.status(406).send(`Could not located user with email: ${reqEmail}`);
  }
});

router.get('/logged-in/:loginIdentifier', (req, res, next) => {
  const callbackURL = 'http://alythiamock.herokuapp.com/#/logged-in';
  const failureURL = 'http://www.facebook.com';
  const loginIdentifier = req.params.loginIdentifier;

  console.log(
    fakeDB.user.loginIdentifier,
    loginIdentifier,
    'same: ?? ',
    fakeDB.user.loginIdentifier === loginIdentifier
  );

  if (fakeDB.user.loginIdentifier === loginIdentifier) {
    res.redirect(callbackURL);
  } else {
    res.redirect(failureURL);
  }
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.json({ res: 'This is a get with id:', id });
});

router.use((req, res, next) => {
  const err = new Error('AUTH route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
