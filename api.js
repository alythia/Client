"use strict";
const router = require("express").Router();
const uuidv4 = require("uuid/v4");

const fakeDB = {
  user: {
    email: "email@email.com",
    loginIdentifier: ""
  }
};

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json({ res: "This is a get with id:", id });
});

router.post("/verify/:id", (req, res, next) => {
  // this POST comes from Alythia after the app scan
  const id = req.params.id;
  const reqEmail = req.body.email;
  const dbEmail = fakeDB.user.email;
  fakeDB.user.loginIdentifier = uuidv4();

  if (dbEmail === reqEmail) {
    res.json({ loginIdentifier: fakeDB.user.loginIdentifier });
  } else {
    res.status(406).send(`Could not located user with email: ${email}`);
  }
});

router.post("/logged-in/:loginIdentifier", (req, res, next) => {
  const callbackURL = req.body.callbackURL;
  const failureURL = req.body.failureURL;
  const loginIdentifier = req.params.loginIdentifier;

  if (fakeDB.user.loginIdentifier === loginIdentifier) {
    res.redirect(callbackURL);
  } else {
    res.redirect(failureURL);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
