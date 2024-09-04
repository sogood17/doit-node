const asyncHandler = require("express-async-handler");


//GET login page
//Get /
const getLogin = asyncHandler(async(req, res) => {
  res.render("home");
})

//POST login
//POST /
const loginUser = asyncHandler(async(req, res)=> {
  const {username, password} = req.body;

  if (username === "admin" && password === "1234") {
    res.send("login is successful");
  } else {
    res.send("Please check your ID or password");
  }
})

//GET register page
//GET /register
const getRegister = asyncHandler(async(req, res)=> {
  res.render("register");
})


module.exports = {getLogin, loginUser, getRegister};