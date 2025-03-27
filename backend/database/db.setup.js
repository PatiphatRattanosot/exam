const mongoose = require("mongoose");

// Connect to the MongoDB database
const mongodbURI = process.env.DB_URL || "mongodb://localhost:27017/np-airline";

mongoose
  .connect(mongodbURI)
  .then(() =>
    console.log(
      "Connected to the database : " +
        mongoose.connection.host +
        ":" +
        mongoose.connection.port
    )
  )
  .catch((err) => console.log("Database connection error : " + err));

module.exports = mongoose;
