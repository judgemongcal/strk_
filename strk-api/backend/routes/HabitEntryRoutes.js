const express = require("express");
const router = express.Router();
const habitEntryController = require("../controllers/HabitEntryController");

router.get(
	"/:userId/habit/:habitId",
	habitEntryController.getEntries,
);
router.get("/:entryId", habitEntryController.getEntry);
router.post("/", habitEntryController.addEntry);
router.put("/", habitEntryController.updateEntry);
module.exports = router;
