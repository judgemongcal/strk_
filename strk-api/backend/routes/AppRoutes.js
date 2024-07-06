const express = require("express");
const router = express.Router();
const appController = require("../controllers/AppController");

// @TODO: PROVIDE ROUTES
router.get("/", appController.getUsers);
router.post("/add-user", appController.addUser);
router.put("/:id", appController.editUser);

module.exports = router;
