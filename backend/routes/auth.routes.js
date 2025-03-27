const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller"); // Adjust the path if needed

// Route for user registration
router.post("/register", authController.register);

// Route for user login
router.post("/login", authController.login);

// Protected route to get user profile
router.get("/profile", authController.getProfile);

module.exports = router;
