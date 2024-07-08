const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const habitController = require("../controllers/HabitController");

// @TODO: PROVIDE ROUTES
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.addUser);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
