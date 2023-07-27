const express = require("express");
const router = express.Router();

router.get("/blogsData", (req, res) => {
  try {
    res.send(global.blogs_items);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
