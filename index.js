const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");

const app = express();
const port = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;
const dbConnect = require("./config/db");
dbConnect(MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, my new App!");
});

const genre = require("./routes/genre");
app.use("/api", genre);

const artist = require("./routes/artist");
app.use("/api", artist);

const chat = require("./routes/chat.js");
app.use("/api", chat);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Artists App listening at http://localhost:${port}`);
});
