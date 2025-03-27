// auth.controller.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model"); // Adjust the path to your User model
const { generateToken } = require("../lib/utils");

// Register a new user
exports.register = async (req, res) => {
  try {
    const {
      firstNameTh,
      lastNameTh,
      firstNameEn,
      lastNameEn,
      email,
      phoneNumber,
      password,
    } = req.body;

    // Validate required fields
    if (
      !firstNameTh ||
      !lastNameTh ||
      !firstNameEn ||
      !lastNameEn ||
      !email ||
      !phoneNumber ||
      !password
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      firstNameTh,
      lastNameTh,
      firstNameEn,
      lastNameEn,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token

    const token = generateToken(user._id, res);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

// Get the current user's profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Assuming req.user is populated by middleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching profile", error: error.message });
  }
};
