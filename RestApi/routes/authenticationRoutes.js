const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/authentication', async (req,res)=>{
    try{
        const allUsers = await Users.find({username: req.body.username});
        if(allUsers.length != 0){
            const comparePassword = await bcrypt.compare(req.body.password,allUsers[0].password);
            if(comparePassword){
                const user = {name:req.body.username};
                const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
                res.json({"status":"1","message" : "You are successfully loggedin","appbearer" : accessToken});    
            }else{
                res.json({"status":"0","message" : "Incorrect password"});
            }
        } else{
            res.json({"status":"0","message" : "User not found"});
        }
    }catch(err){
        // hello
        res.json({"status":"0","message" : err.message});
    }
    
});

router.post('/saveCredentials', async (req,res)=>{
    //finding exiting user
    const emailExists = await Users.findOne({ username: req.body.username });
    if(emailExists) return res.json({message: "Email already exists"});

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword  = await bcrypt.hash(req.body.password,salt);

    const authData = new Users({
        username : req.body.username,
        password : hashPassword
    });

    //creating new users
    try{
       await authData.save();
       res.json({"status" : "1","message" : "Credentials saved successfully"});
    }catch(err){
        res.json({"status" : "0","message" : err.message});
    }
});

router.post('/refreshToken',()=>{
    
});

router.post('/logout',()=>{

});

module.exports = router;