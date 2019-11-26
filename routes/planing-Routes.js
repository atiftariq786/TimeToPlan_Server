const express = require("express");
const PlaningCtrl = require("../controllers/planingController");
const router = express.Router()

router.post("/create-story", PlaningCtrl.createStory)
router.get("/stories", PlaningCtrl.getStories)

module.exports = router