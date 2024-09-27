const mongoose = require('mongoose'); 

const recieverSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true, // Ensures that full name is provided
        default: ""
    },
    email: {
        type: String,
        required: true, // Ensures email is provided
        default: ""
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'], // Restrict values to these options
        required: true
    },
    address: {
        type: String,
        required: true,
        default: ""
    },
    bloodType: {
        type: String,
        required: true,
        default: ""
    },
    phoneNo: {
        type: String,
        required: true,
        default: ""
    },
    idProof: {
        type: String, // Can be the path or filename of the ID proof
        required: true,
        default: ""
    }
});

const Reciever = mongoose.model("Reciever", recieverSchema);
module.exports = Reciever;
