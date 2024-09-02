const asyncHandler = require("express-async-handler");


//GET login page
//Get /
const getLogin = asyncHandler(async(req, res) => {
  res.render("home");
})

module.exports = getLogin;