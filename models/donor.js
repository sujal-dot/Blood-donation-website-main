const mongoose = require('mongoose'); 

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        default: "Others",
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        default: "",
        required: true,
    },
    phone: {
        type: String,
        default: "",
        required: true,
    },
    bloodType: {
        type: String,
        default: "",
        required: true,
    },
    diseaseHistory: {
        type: String,
        default: "",
    },
    idProofPath: {
        type: String,
        default: "",
    }
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
