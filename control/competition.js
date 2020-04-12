const Post = require('../models/Competition');

const mongoose = require('mongoose');


exports.getPost =(req,res)=>{
    const posts = Post.find()
    .select("_id name Description author")
    .populate('author','name email')
    .then((posts)=>{
        res.json({posts});
    })
    .catch(err => console.log(err));

};

exports.createPosts = (req,res)=>{
    const post = new Post( {
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        Description:req.body.Description,
        author:req.body.authorId
    });
 post.save().then(result=>{
     res.json({
         post:result
     });
     
 });

};
