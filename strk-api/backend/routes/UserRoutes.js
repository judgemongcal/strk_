const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// @TODO: PROVIDE ROUTES
router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
