const express = require("express");
const PlaningCtrl = require("../controllers/planingController");
const router = express.Router();


router.post("/create-story",PlaningCtrl.createStory)
router.get("/stories", PlaningCtrl.getStories)
router.delete('/story/:id', PlaningCtrl.deleteStory)
router.put('/story/:id', PlaningCtrl.updateStory)

router.post("/create-goal", PlaningCtrl.createGoal)
router.get("/goals", PlaningCtrl.getGoals)
router.delete('/goals/:id', PlaningCtrl.deleteGoal)
router.put('/goals/:id', PlaningCtrl.updateGoal)

module.exports = router