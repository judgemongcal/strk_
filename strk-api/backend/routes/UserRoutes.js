const express = require("express");
const router = express.Router();
const appController = require("../controllers/UserController");

// @TODO: PROVIDE ROUTES
router.get("/users", appController.getUsers);
router.post("/user", appController.addUser);
router.put("/user/:id", appController.editUser);
router.delete("/user/:id", appController.deleteUser);

module.exports = router;
