const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username,
    password,
  });
  res.json({
    message: "admin created successully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "incorrect email and password",
    });
  }
  // Implement admin signup logic
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imagelink = req.body.imagelink;
  const price = req.body.price;
  //   zod
  const newcourse = await Course.create({
    title,
    description,
    imagelink,
    price,
  });
  res.json({
    message: "course created successfully",
    courseId: newcourse._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
