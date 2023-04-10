require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authenticationRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

// Cors configuration
var cors = require('cors');
app.use(cors({
    origin: '*',
    // methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json());

app.use('/auth',authRoutes);
app.use('/product',productRoutes);


//Routes
app.get('/',async (req,res)=>{
    res.send({message:"root route"});
});

//Connect to the database
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to database");
})
.catch((error)=>{
    console.log(error.message);
});

//Define port for listening
app.listen(3000);