const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String
  },
  phone:{
    type: String,
    required: [true, "Please provide a phone number"]
  }
},
{
  timestamps: true

})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;