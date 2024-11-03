const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express()
app.use( cors() )

app.use(express.json({ limit: "10mb"}));

const PORT = process.env.PORT || 8080


app.get("/", (req, res) => {
    res.send("Server Running");
})

app.post("/signup", (req, res) => {
    console.log(req.body);
})


app.listen( PORT, () => console.log(" server running is on port no :"+ PORT))









//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
//  //Get the default connection
// var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));