const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    submission:{
        type:mongoose.Schema.Types.ObjectId, ref:'Submission'
    },
    author:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    }
});

module.exports = mongoose.model('Like',LikeSchema);