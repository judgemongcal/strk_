const express = require("express");
const router = express.Router();
const unitsController = require("../controllers/UnitsController");

router.get("", unitsController.getUnits);

module.exports = router;
