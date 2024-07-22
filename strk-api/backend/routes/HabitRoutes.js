const express = require("express");
const router = express.Router();
const habitController = require("../controllers/HabitController");

router.get("/:id", habitController.getHabits);
router.get("/habit/:id", habitController.getHabit);
router.post("/", habitController.addHabit);
router.put("/:id", habitController.updateHabit);
router.delete("/:id", habitController.deleteHabit);

module.exports = router;
