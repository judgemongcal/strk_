const express = require("express");
const router = express.Router();
const habitEntryController = require("../controllers/HabitEntryController");

router.get(
	"/:userId/habit/:habitId",
	habitEntryController.getEntries,
);
router.get("/:entryId", habitEntryController.getEntry);
router.post("/", habitEntryController.addEntry);
module.exports = router;
