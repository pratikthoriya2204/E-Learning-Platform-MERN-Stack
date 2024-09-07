const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentAuthSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const StudentAuth = mongoose.model("studentauth",StudentAuthSchema);

module.exports = StudentAuth;