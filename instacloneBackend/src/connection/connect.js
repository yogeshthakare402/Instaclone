const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/restapi')
.then(console.log("login Successful"))
.catch(console.error);