const express = require("express");
const router = express.Router();
const User = require("./../models/users.model");

router.post("/", async function (req, res) {
  try {
      console.log("ll", req.body)
      var newUser = new User();
      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      await newUser.save().then((userData) => {
          if(userData){
              res.send({
                  status: true,
                  data: "User Created Successfully."
              });
          }
          else{
              res.send({
                  status: false,
                  data: "User Creation Failed."
              });
          }
      })
  } 
  catch (error) {
      res.send({
          status: false,
          data: error,
      });
  }
});

module.exports = router;

// var userController = require('../controller/user.controller');

// module.exports = function (app) {

//   app.route('api/user/createUser').post(userController.createUser);

// }