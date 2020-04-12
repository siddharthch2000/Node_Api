const mongoose = require('mongoose');

const CompSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
        
    },
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User' }  
});

module.exports = mongoose.model('Competition',CompSchema);