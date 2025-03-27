const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
require("./database/db.setup");
// Use cors middleware
const corsOption = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//routes
const AuthRoutes = require("./routes/auth.routes");
const FlightRoutes = require("./routes/flight.routes");
const BookingRoutes = require("./routes/booking.routes");
app.use("/auth", AuthRoutes);
app.use("/flights", FlightRoutes);
app.use("/api/bookings", BookingRoutes); // Ensure this matches your route setup

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
