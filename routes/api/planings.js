const router = require("express").Router();
const planingController = require("../../controllers/planingController");

// Matches with "/api/planings"
router.route("/")
  //.get(planingController.findSaved)
  .post(planingController.saveStory);



module.exports = router;
