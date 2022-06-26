const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// home page
router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

// login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }
  res.render("login", { loggedIn: req.session.loggedIn });
});

// Go to specific post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        return res.status(404).json({ message: "No post found with this id" });
      }
      const post = dbPostData.get({ plain: true });
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
