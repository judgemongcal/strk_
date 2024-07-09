const express = require("express");
const router = express.Router();
const habitEntryController = require("../controllers/HabitEntryController");

router.get(
	"/:userId/habit/:habitId",
	habitEntryController.getEntries,
);

module.exports = router;
