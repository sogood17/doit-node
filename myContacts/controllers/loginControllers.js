const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

//GET login page
//Get /
const getLogin = asyncHandler(async(req, res) => {
  res.render("home");
})

//POST login
//POST /
const loginUser = asyncHandler(async(req, res)=> {
  const {userID, password} = req.body;
  const user = await User.findOne({userID});
  if (!user) {
    return res.json({"message":"User's not found"})
  }
  if (user) {
    const isMatch = bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({id:user._id}, jwtSecret);
      res.cookie("token", token, {httpOnly:true});
      res.redirect("/contacts");
    } 
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
    return res.send("Please fill in the blank");
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