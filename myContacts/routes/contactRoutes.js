const express = require("express");
const router = express.Router();
const { getAllcontacts } = require('../controllers/contactControllers');

//Read and create all contacts
router.route("/")
.get(getAllcontacts)
.post((req, res) => {
  const {name, email, phone} = req.body;
  if (!name || !email || !phone) {
    return res.send("Required value not entered.")
  }

  res.send("Create Contact");
  })

//Read 1 contact
router.route("/:id")
.get((req, res) => {
  res.send("View Contact for ID: " + req.params.id);
  })
//Modify 1 contact
.put((req, res) => {
  res.send("Update Contact for ID: " + req.params.id);
  })
//Delete 1 contact
.delete((req, res) => {
  res.send("Delete Contact for ID: " + req.params.id);
  })

//Using GET method without middleware
// app.get("/contacts", (req, res) => {
//   res.send("Contacts Page!");
// })

module.exports = router;