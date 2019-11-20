const router = require("express").Router();
const planingRoutes = require("./planing");

// Planing routes
router.use("/planings", planingRoutes);

module.exports = router;
