const express = require("express");
const router = express.Router();

//routes
router.get("/2-players", async (req, res) => {

      res.render("partners2p" );
});

router.get("/4-players", async (req, res) => {
    res.render("partners4p");
});

router.get("/6-players", async (req, res) => {
    res.render("partners6p");
});

module.exports = router;
