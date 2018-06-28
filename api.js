"use strict";
const router = require("express").Router();

const fakeDB = {
  user: { email: "", loginIdentifier: "" }
};

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json({ res: "This is a get with id:", id });
});

router.post("/:id", (req, res, next) => {
  const id = req.params.id;
  const email = req.body.email;

  if (fakeDB.user.email === email) {
    res.json({ loginIdentifier: fakeDB.user.loginIdentifier });
  } else {
    res.sendStatus(300, `Could not located user with email: ${email}`);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
