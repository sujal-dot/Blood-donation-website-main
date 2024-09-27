var http = require('http');
var express = require("express");
var mongoose = require('mongoose');
var cors = require('cors'); // Import CORS

var app = express();
var port = 3000;
var UserRoutes = require('./routes/user');
var DonorRoutes = require('./routes/donor');
var RecieverRoutes = require('./routes/reciever');

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());


// Routes
app.use("/api/createUser", UserRoutes);
app.use("/api/Donor/", DonorRoutes);
app.use("/api/Reciever/", RecieverRoutes);

async function connectDb() {
    await mongoose.connect("mongodb+srv://anchalyadav915:gR5F48dstYuQZwo9@cluster2.agy5d.mongodb.net/");
    console.log("MongoDB connected.");
}

connectDb().catch((err) => {
    console.error(err);
});

http.createServer(app).listen(port);

console.log(`Server is running at port ${port}`);