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
router.delete("/:id", habitEntryController.deleteEntry);
router.delete(
	"/:userId/habit/:habitId",
	habitEntryController.deleteEntries,
);
module.exports = router;
