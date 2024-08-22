const express = require("express");
const router = express.Router();
const {getAllContacts, addContactForm, createContact, getContact, updateContact, deleteContact} = require("../controllers/contactControllers");

//Read and create all contacts
router.route("/")
.get(getAllContacts);

router.route("/add")
.get(addContactForm)
.post(createContact);

//Read 1 contact
router.route("/:id")
.get(getContact)
//Modify 1 contact
.put(updateContact)
//Delete 1 contact
.delete(deleteContact);

//Using GET method without middleware
// app.get("/contacts", (req, res) => {
//   res.send("Contacts Page!");
// })

module.exports = router;