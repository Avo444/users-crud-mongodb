const UsersController = require("../controllers/UsersController");

const express = require("express");
const router = express.Router();

const usersController = new UsersController();

router.get("/", usersController.getUsers);
router.patch("/:id", usersController.patchUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;