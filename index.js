require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection call kiya
connectDB();

app.use(express.json());

const apiRoutes = require("./routes/auth");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("NexaONE Working!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
