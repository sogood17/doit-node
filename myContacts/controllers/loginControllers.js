const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

//GET login page
//Get /
const getLogin = asyncHandler(async(req, res) => {
  res.render("home");
})

//POST login
//POST /
const loginUser = asyncHandler(async(req, res)=> {
  const {userID, password} = req.body;
  if (userID === "admin" && password === "1234") {
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

//POST register
//POST /register
const registerUser = asyncHandler(async(req, res)=> {
  const {userID, password, password2} = req.body;
  if (!userID || !password || !password2) {
    res.send("Please fill in the blank");
  } else {
    if (password === password2) {
      const saltRounds =10;
      const hasedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = await User.create({userID, password:hasedPassword});
    }
    res.send("success");
  }

})


module.exports = {getLogin, loginUser, getRegister, registerUser};