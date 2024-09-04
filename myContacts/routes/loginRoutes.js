const express = require("express");
const router = express.Router();
const {getLogin, loginUser, getRegister} = require("../controllers/loginControllers");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister);

module.exports = router;