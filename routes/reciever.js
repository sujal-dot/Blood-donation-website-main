const express = require("express");
const router = express.Router();
const path = require('path');
const Receiver = require("../models/receiver");

router.post("/Create", async function (req, res) {
    try {
        // Log the request body for debugging
        const body = await req.body;
        console.log("Request Body:", body);
        if (req.files == null) {
            return res.send({
                status: false,
                data: "No file uploaded."
            });
        }

        // Move the file to the uploads folder with a new name
        const fileExtension = path.extname(req.files.idProof.name);

        const uploadPath = "./public/" + body.phone + fileExtension;
        const file = req.files.idProof;
        // const newFileName = body.phone + "_" + file.name;
        file.mv(uploadPath);



        // Save the new receiver to the database
        const receiverData = Receiver.create({
            fullName: body.fullName,  // Match with frontend 'fullName'
            email: body.email,  // Match with frontend 'email'
            gender: body.gender,  // Match with frontend 'gender'
            phoneNo: body.phone,  // Match with frontend 'phone' (was phoneNo)
            address: body.address,  // Match with frontend 'address'
            bloodType: body.bloodType,  // Match with frontend 'bloodType'
            idProof: body.phone + fileExtension// Match with frontend file input
        });
        console.log(receiverData);


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
