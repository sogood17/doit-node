const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

//GET contacts/
const getAllContacts = asyncHandler(async(req, res) => {
  const allContacts = await Contact.find();
  res.render("index", {contacts: allContacts});
});

//view add contact form
//GET contacts/add
const addContactForm = (req, res) => {
  res.render("add");
}


//POST contacts/
const createContact = asyncHandler(async(req, res) => {
  const {name, email, phone} = req.body;
  if (!name || !phone) {
    return res.send("Required value not entered.");
  } else {
  const newContact = await Contact.create({name, email, phone})
  res.redirect("/contacts");
  }
});
//GET contacts/:id
const getContact = asyncHandler(async(req, res) => {
  const {id}=req.params;
  const contactById = await Contact.findById(id);
  res.render("update", {contact: contactById})
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
    res.redirect("/contacts");
  }
});
//DELETE contacts/:id
const deleteContact = asyncHandler(async(req, res) => {
  const {id}=req.params;
  const contactById = await Contact.findById(id);
  if (!contactById) {
    throw new Error("Contact not found");
  }
  const deletedContact = await Contact.deleteOne()
  res.redirect("/contacts");
});


module.exports = {getAllContacts, addContactForm, createContact, getContact, updateContact, deleteContact};