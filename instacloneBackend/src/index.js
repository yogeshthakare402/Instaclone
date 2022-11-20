const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connect = require("./connection/connect");
const postRoutes = require("./routes/posts");


//to upload files
const fileUpload = require("express-fileupload");

const app = express();
// app.use(bodyParser.json());

//editing for filesize
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// use fileupload
app.use(fileUpload({
    useTempFiles:true
}))
// app.get('/',(req,res)=>{
//     res.send("I am in")
// });
app.use("/", postRoutes)


app.listen(3000, ()=>console.log('Server is running at 3000'))