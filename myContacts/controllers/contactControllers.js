//asyncHandler 가져오기

const getAllContacts = async(req, res) => {
  try {
    res.send("Contacts Page!");
    console.log(req.body);
  } catch (err) {
    console.log(err);
  }
}

const postAllContacts = async(req, res) => {
  try {
    const {name, email, phone} = req.body;
    if (!name || !phone) {
      return res.send("Required value not entered.");
    }
    res.send("Create Contact!")

  } catch (err) {
    console.log(err);
  }
}

const getContact = async(req, res) => {
  try {
    res.send("View Contact for ID:" + req.params.id);
  } catch (err) {
    console.log(err);
  }
}

const updateContact = async(req, res) => {
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
}

const deleteContact = async(req, res) => {
  res.send("Delete Contact for ID: " + req.params.id)
}



module.exports = {getAllContacts, postAllContacts, getContact, updateContact, deleteContact};