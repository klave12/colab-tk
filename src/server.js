const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

// creating server app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(router);

// starting server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
