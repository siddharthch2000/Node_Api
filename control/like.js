const Post = require('../models/Like');

const mongoose = require('mongoose');


exports.getPist =(req,res)=>{
    const posts = Post.find()
    .select("_id submission author")
   
    .then((posts)=>{
        res.json({posts});
    })
    .catch(err => console.log(err));

};


exports.createPists = (req,res)=>{
    const post = new Post( {
        _id : new mongoose.Types.ObjectId(),
        submission: req.body.submissionId,
        author:req.body.authorId
    });
 post.save().then(result=>{
     res.json({
         post:result
     });
     
 });

};
