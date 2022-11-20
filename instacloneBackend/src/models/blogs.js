const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postImage: { type: JSON },
    authorName : {type: String},
    authorLocation : {type: String},
    description : {type: String}
},{timestamps:true});

const postModel = mongoose.model("Posts", postSchema);
module.exports = postModel;