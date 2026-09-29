const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Naye routes ko yahan import aur use kiya hai
const apiRoutes = require("./routes/auth");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("NexaONE Working!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
