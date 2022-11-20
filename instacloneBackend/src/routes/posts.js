const express = require("express");
const bodyParser = require("body-parser");
const Post = require('../models/blogs');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

cloudinary.config({ 
    cloud_name: 'dcip3zcp4', 
    api_key: '761659471794486', 
    api_secret: 'j_ETkpzIDJs0_Y6uCFtL8Utf2Qw',
    secure: true
  });

router.use(bodyParser.json());


router.get('/posts', async(req, res) => {
    try {
        console.log("I am inside get post")
        //here we are rendering the image giveing it in ressponse
        const posts = await Post.find();
        res.json({
            status: "Sucess",
            posts
        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

router.post('/posts', (req, res) => {
    try {
        console.log("I am Inside Posts")
        console.log(req)
        //  to upload Image fetch image and upload
        //for postaman use this file
        // const file = req.files.postImage;

        //for frontend file use this file
        const file = req.body.postImage
        // console.log(file)
        // console.log(file.tempFilePath)
        // Upload file to Cloudinary
        cloudinary.uploader.upload(file, (err,result)=>{
             const posts =new Post({
                postImage: result.url,
                authorName: req.body.authorName,
                authorLocation: req.body.authorLocation,
                description: req.body.description,
                likes : req.body.likes,
                date: new Date()
            })
            posts.save()
            .then(result=>res.status(200).json({
                status: "Sucess",
                result
            }))
        })

    } catch (e) {
        res.status(500).json({
            status: "I am Failed",
            message: e.message
        })
    }
})

router.delete('/posts/:id', async(req, res) => {
    try {
        console.log("I am inside delete post")
        //here we are rendering the image giveing it in ressponse
        const userPosts = await Post.findOne({_id: req.params.id});
        if(userPosts){
            const posts = await Post.deleteOne({_id: req.params.id});
            res.json({
                status: "Sucess",
                message: "Post deleted"
            })
        }else {
            res.status(401).json({
                status: "Failed",
                message: "User is not authorised to make changes in this post"
            })
        }
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})






module.exports = router;