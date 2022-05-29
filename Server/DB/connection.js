const mongoose = require("mongoose");

const DB = process.env.DATABASE;

module.exports = async function connection() {
  try {
    const connectionParams = {
      useUnifiedTopology: true,
    };
    await mongoose.connect(DB, connectionParams);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
