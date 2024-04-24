const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connection to database
require('./db/connection');
const Users = require('./Model/User');

// POST route to handle incoming data
// app.post("/", async (req, res) => {
//     let user = new Users(req.body);
//     let result = await user.save();
//     res.send(result);
// });

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
