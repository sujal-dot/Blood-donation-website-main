const express = require("express");
const router = express.Router();
const Receiver = require("../models/receiver");

router.post("/Create", async function (req, res) {
    try {
        // Log the request body for debugging
        console.log("Request Body:", req.body);

        // Create a new instance of the Receiver model with the new fields
        const newReceiver = new Receiver({
            fullName: req.body.fullName,  // Match with frontend 'fullName'
            email: req.body.email,  // Match with frontend 'email'
            gender: req.body.gender,  // Match with frontend 'gender'
            phoneNo: req.body.phone,  // Match with frontend 'phone' (was phoneNo)
            address: req.body.address,  // Match with frontend 'address'
            bloodType: req.body.bloodType,  // Match with frontend 'bloodType'
            idProof: req.file ? req.file.path : null  // Match with frontend file input
        });


        // Save the new receiver to the database
        const receiverData = await newReceiver.save();

        // Check if the data was saved successfully
        if (receiverData) {
            return res.send({
                status: true,
                data: "Receiver Created Successfully."
            });
        }
        return res.send({
            status: false,
            data: "Receiver Creation Failed."
        });

    } catch (error) {
        // Send an error response
        res.send({
            status: false,
            data: error.message, // Sending just the error message for clarity
        });
    }
});

module.exports = router;
