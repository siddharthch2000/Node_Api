const Post = require('../models/User');
const mongoose = require('mongoose');


exports.getPosts =(req,res)=>{
    const posts = Post.find()
    .select("_id name email")
    .then((posts)=>{
        res.json({posts});
    })
    .catch(err => console.log(err));

};


exports.createPost = (req,res)=>{
    const post = new Post( {
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        email:req.body.email
    });
 post.save().then(result=>{
     res.json({
         post:result
     });
     
 });

};