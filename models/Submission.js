const mongoose = require('mongoose');

const SubSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image:{
        type:String,
        required:true
    },
    author:{type:mongoose.Schema.Types.ObjectId, ref:'User' } ,
    
    competition:{type:mongoose.Schema.Types.ObjectId, ref:'Competition' }
});

module.exports = mongoose.model('Submission',SubSchema);