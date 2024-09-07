const mongoose = require('mongoose');
const {Schema} = mongoose;

const classSchema = new Schema({

    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studentauth'
    },

    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model("studentClass",classSchema);

