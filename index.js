const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connection to database
require('./db/connection');


app.post("/addHotel", async (req, res) => {
    const hotelData = req.body;

    try {
        const newHotel = new UserModal(hotelData);
        await newHotel.save();
        res.json(newHotel);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de l'ajout des données de l'hôtel");
    }
});

// Create GET request
// app.get("/", (req, res) => {
//     res.send("Express on Vercel");
//   });

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
