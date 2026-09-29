const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => res.send("NexaONE Working!"));
app.listen(PORT, () => console.log("Server started"));