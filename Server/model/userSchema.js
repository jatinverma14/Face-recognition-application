const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  missPerName: {
    type: String,
    required: true,
  },
  missPerAge: {
    type: Number,
    required: true,
  },
  missPerAdd: {
    type: String,
    required: true,
  },
  yourName: {
    type: String,
    required: true,
  },
  yourPhnNum: {
    type: Number,
    required: true,
  },
  yourEmail: {
    type: String,
    required: true,
  },
  missPerImg: {
    data: Buffer,
    contentType: String,
  },
  missPerImgPath: {
    type: String,
  },
});

const User = mongoose.model("USERDATA", userSchema);

module.exports = User;
