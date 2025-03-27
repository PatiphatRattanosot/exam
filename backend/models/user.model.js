const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstNameTh: {
      type: String,
      required: true,
    },
    lastNameTh: {
      type: String,
      required: true,
    },
    firstNameEn: {
      type: String,
      required: true,
    },
    lastNameEn: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, enum: ["admin", "passenger"], default: "passenger" },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
  },
  { timestamps: true }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
