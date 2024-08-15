const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
try {
  const mongo = await mongoose.connect(process.env.DB_CONNECT);
  console.log("DB Connected");
}
catch (err) {
  console.log(err)
}}

module.exports = dbConnect