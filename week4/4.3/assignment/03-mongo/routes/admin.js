const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check if a user already exist
  await Admin.create({
    username,
    password,
  });
  res.json({
    message: "admin created succesfully",
  });
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

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({
    Courses: response,
  });
});

module.exports = router;
