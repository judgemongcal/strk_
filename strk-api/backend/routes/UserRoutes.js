const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// @TODO: PROVIDE ROUTES
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.addUser);
router.post("/sign-up", userController.createNewUser);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
