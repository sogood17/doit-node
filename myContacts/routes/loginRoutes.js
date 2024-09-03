const express = require("express");
const router = express.Router();
const getLogin = require("../controllers/loginControllers");

router.route("/").get(getLogin);

module.exports = router;