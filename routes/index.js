const UsersController = require("../controllers/UsersController");

const express = require("express");
const router = express.Router();

const usersController = new UsersController();

router.get("/", usersController.home);
router.get("/view/:id", usersController.view);

module.exports = router;
