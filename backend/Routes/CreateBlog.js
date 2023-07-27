const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.post("/createNewBlog", async (req, res) => {
  try {
    await Blog.create({
      title: req.body.title,
      body: req.body.body,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
