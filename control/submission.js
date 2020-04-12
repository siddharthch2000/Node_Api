const Post = require('../models/Submission');

const mongoose = require('mongoose');


exports.getPest =(req,res)=>{
    const posts = Post.find()
    .select("_id image ")
    .populate('author','name email')
    .then((posts)=>{
        res.json({posts});
    })
    .catch(err => console.log(err));

};
exports.createPests = (req,res)=>{
    const post = new Post( {
        _id : new mongoose.Types.ObjectId(),
        image: req.body.image,
        competition:req.body.competitionId,
        author:req.body.authorId
    });
 post.save().then(result=>{
     res.json({
         post:result
     });
     
 });

};
