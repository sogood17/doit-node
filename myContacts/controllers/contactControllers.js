const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

//GET contacts/
const getAllContacts = asyncHandler(async(req, res) => {
  const allContacts = await Contact.find();
  res.json(allContacts);
});
//POST contacts/
const postAllContacts = asyncHandler(async(req, res) => {
  const {name, email, phone} = req.body;
  if (!name || !phone) {
    return res.send("Required value not entered.");
  } else {
  const newContact = await Contact.create({name, email, phone})
  res.send("Create Contact!");
  }
});
//GET contacts/:id
const getContact = asyncHandler(async(req, res) => {
  const {id}=req.params;
  const contactById = await Contact.findById(id);
  res.json(contactById);
});
//PUT contacts/:id
const updateContact = asyncHandler(async(req, res) => {
  const {id}=req.params;
  const contactById = await Contact.findById(id);
  const {name, email, phone} = req.body;
  if (!name && !email && !phone) {
    res.send("At least one value is required.");
  } else {
    if (name) {
    contactById.name=name;
    }
    if (email) {
    contactById.email=email;
    }
    if (phone) {
    contactById.phone=phone;
    }
    contactById.save();
    res.send(id + " is Updated.");
  }
});
//DELETE contacts/:id
const deleteContact = asyncHandler(async(req, res) => {
  const {id}=req.params;
  const contactById = await Contact.findById(id);
  if (!contactById) {
    throw new Error("Contact nof found");
  }
  const deletedContact = await Contact.deleteOne()
  res.send("Delete Contact for ID: " + id);
});


module.exports = {getAllContacts, postAllContacts, getContact, updateContact, deleteContact};