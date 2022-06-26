const router = require("express").Router();
const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }
  res.render("login", { loggedIn: req.session.loggedIn });
});

module.exports = router;
