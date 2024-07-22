const express = require("express");
const router = express.Router();

//routes
router.get("/", async (req, res) => {
      res.render("index");
});

module.exports = router;
