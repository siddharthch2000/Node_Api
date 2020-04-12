const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true }
    )
.then(()=>console.log('DB connected'))

mongoose.connection.on('error',err =>{
    console.log(`DB connection error: ${err.messaage}`);
});

const postRoutes = require('./routes/post');

app.use(bodyParser.json());

app.use(morgan('dev'));


app.use('/',postRoutes);


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`A node js api listen on port : ${port}`)
});