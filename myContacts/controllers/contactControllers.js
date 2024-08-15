//asyncHandler 가져오기

const getAllContacts = async(req, res) => {
  try {
    res.send("Contacts Page!")
  } catch (err) {
    console.log(err);
  }
}

const postAllContacts = async(req, res) => {
  try {
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
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
      console.log("At least one value is required.");
    }
    res.send(params.id + "is Updated.");
  } catch (err) {
    console.log(err);
  }
}



module.exports = getAllContacts;