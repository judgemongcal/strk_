const express = require("express");
const router = express.Router();
const habitController = require("../controllers/HabitController");

router.get("/:id", habitController.getHabits);
router.get("/habit/:id", habitController.getHabit);
router.post("/:id", habitController.addHabit);
router.put(
	"/:user_id/habit/:habit_id",
	habitController.updateHabit,
);
router.delete(
	"/:user_id/habit/:habit_id",
	habitController.deleteHabit,
);

module.exports = router;
