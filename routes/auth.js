const express = require("express");
const router = express.Router();

// Test route
router.get("/status", (req, res) => {
  res.json({ message: "NexaONE API is up and running smoothly!" });
});

module.exports = router;