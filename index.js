// Add Express
const express = require("express");

// Initialize Express
const app = express();


require('./db/connection');
const Users = require('./Model/User');
// const UserModal = require('./Model/Data');

app.post("/", async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// ajout hotel
// app.post("/addHotel", async (req, res) => {
//     const hotelData = req.body;

//     try {
//         const newHotel = new UserModal(hotelData);
//         await newHotel.save();
//         res.json(newHotel);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Erreur lors de l'ajout des données de l'hôtel");
//     }
// });

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;