const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const specs = require('./src/swagger');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')

//configuring env
dotenv.config();


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URI;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
const port = process.env.PORT || 3000;
const uri = process.env.URI
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
    console.log(`Swagger docs: https://get-youtube-subscribers-dtim.onrender.com/api-docs`);
})
