const express = require("express");
const router = express.Router();
const {getLogin, loginUser, getRegister, postRegister} = require("../controllers/loginControllers");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister).post(postRegister);

module.exports = router;