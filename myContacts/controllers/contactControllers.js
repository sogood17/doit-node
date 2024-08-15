//GET contacts/
const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async(req, res) => {
  try {
    res.send("Contacts Page!");
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
});
//POST contacts/
const postAllContacts = asyncHandler(async(req, res) => {
  try {
    const {name, email, phone} = req.body;
    if (!name || !phone) {
      return res.send("Required value not entered.");
    }
    res.send("Create Contact!");

  } catch (err) {
    console.log(err);
  }
});
//GET contacts/:id
const getContact = asyncHandler(async(req, res) => {
  try {
    res.send("View Contact for ID:" + req.params.id);
  } catch (err) {
    console.log(err);
  }
});
//PUT contacts/:id
const updateContact = asyncHandler(async(req, res) => {
  try {
    const {name, email, phone} = req.body;
    if (!name && !email && !phone) {
      res.send("At least one value is required.");
    } else {
      res.send(req.params.id + " is Updated.");
    }
  } catch (err) {
    console.log(err);
  }
});
//DELETE contacts/:id
const deleteContact = asyncHandler(async(req, res) => {
  res.send("Delete Contact for ID: " + req.params.id);
});


module.exports = {getAllContacts, postAllContacts, getContact, updateContact, deleteContact};