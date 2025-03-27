const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flight.controller");

// Create a new flight
router.post("/", flightController.createFlight);

// Get all flights
router.get("/", flightController.getAllFlights);

// Get a single flight by ID
router.get("/:id", flightController.getFlightById);

// Update a flight by ID
router.put("/:id", flightController.updateFlight);

// Delete a flight by ID
router.delete("/:id", flightController.deleteFlight);

module.exports = router;
