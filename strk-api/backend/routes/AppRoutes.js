const express = require("express");
const router = express.Router();
const appController = require("../controllers/AppController");

// @TODO: PROVIDE ROUTES
router.get("/", appController.getUsers);
router.post("/", appController.addUser);

module.exports = router;
