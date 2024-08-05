const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/contacts', require("./routes/contactRoutes"))

app.listen(3000, () => {
  console.log('server is running!');
});
