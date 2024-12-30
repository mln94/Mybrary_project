const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const routes = require("./server/routes/routes");
require("dotenv").config();

const databaseConnection = require("./server/connections/database");
databaseConnection();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use("/", routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});