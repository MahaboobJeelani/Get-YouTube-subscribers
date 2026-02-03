const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
const dotenv = require("dotenv");

// configuration of env
dotenv.config();

// Connect to DATABASE
// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URI || "mongodb+srv://saksham:7023797883@cluster0.2vpy7pt.mongodb.net/subscribers";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll();