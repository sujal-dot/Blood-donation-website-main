var http = require('http');
var express = require("express");
var mongoose = require('mongoose');
var cors = require('cors'); // Import CORS
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');


var app = express();
var port = 3000;



app.use(fileUpload({ createParentPath: true, limits: { fileSize: 50 * 1024 * 1024 } }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: '500mb' }));
app.use(cors())
app.use(express.static("public"));
app.use(express.json({ limit: '500mb' }));
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

var UserRoutes = require('./routes/user');
var DonorRoutes = require('./routes/donor');
var ReceiverRoutes = require('./routes/reciever');


// Routes
app.use("/api/createUser", UserRoutes);
app.use("/api/Donor/", DonorRoutes);
app.use("/api/Reciever/", ReceiverRoutes);

async function connectDb() {
    await mongoose.connect("mongodb+srv://anchalyadav915:gR5F48dstYuQZwo9@cluster2.agy5d.mongodb.net/");
    console.log("MongoDB connected.");
}

connectDb().catch((err) => {
    console.error(err);
});

http.createServer(app).listen(port);

console.log(`Server is running at port ${port}`);
