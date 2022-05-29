const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());

dotenv.config({ path: "./config.env" });
app.use(express.static(__dirname + "./public/uploads/"));

const port = process.env.PORT;

// connecting to mongoDB atlas
require("./DB/connection");

// for reading JSON data
app.use(express.json());

// linking the router files
app.use(require("./router/auth"));

const User = require("./model/userSchema");

const PORT = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
