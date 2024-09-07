const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const url = process.env.MONGO_URL;

const connectToMongo = async()=>{
    const con = await mongoose.connect(url);
    console.log("MongoDB Connected successfully...");
}

module.exports = connectToMongo;