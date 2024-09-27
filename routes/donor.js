const express = require("express");
const router = express.Router();
const Donor = require("./../models/donor");

router.post("/", async function (req, res) {
  try {
      console.log("Received Data:", req.body);

      // Create a new Donor instance with the received data
      var newDonor = new Donor({
          name: req.body.name,
          gender: req.body.gender,
          age: req.body.age,
          weight: req.body.weight,
          email: req.body.email,
          phone: req.body.phone,
          bloodType: req.body.bloodType,
          diseaseHistory: req.body.diseaseHistory,
          idProofPath: req.body.idProofPath
      });

      // Save the new donor to the database
      await newDonor.save().then((donorData) => {
          if (donorData) {
              res.send({
                  status: true,
                  data: "Donor Created Successfully."
              });
          } else {
              res.send({
                  status: false,
                  data: "Donor Creation Failed."
              });
          }
      });
  } 
  catch (error) {
      res.send({
          status: false,
          data: error.message,
      });
  }
});

module.exports = router;
