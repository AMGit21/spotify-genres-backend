// external imports
const mongoose = require("mongoose");

async function dbConnect(url) {
  // use mongoose to connect this app to our database on mongoDB using the MONGODB_URI (connection string)
  mongoose
    .connect(url)
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
