//asyncHandler 가져오기

const getAllContacts = async ((req, res) => {
  try {
    res.send("Contacts Page!")
  } catch (err) {
    console.log(err);
  }

})

module.exports = getAllcontacts;