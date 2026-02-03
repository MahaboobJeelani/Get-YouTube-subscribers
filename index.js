const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

//configuring env
dotenv.config();


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URI || "mongodb+srv://luckyjoy765:Jeelani123@cluster0.gdogzt3.mongodb.net/subscribers";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
