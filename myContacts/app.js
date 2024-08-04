const express = require("express");

const app = express();

app.get("/contacts", (req, res) => {
  res.send("Contacts Page!");
})

app.listen(3000, () => {
  console.log('server is running!');
});