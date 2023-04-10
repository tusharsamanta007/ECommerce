const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Products = require('../models/Products.js');
const {verifyToken} = require('../helpers/jwthelpers.js');

router.get('/getAllProductDetail',verifyToken, async (req,res)=>{
    try{
        const allProduct = await Products.find();
        res.send({"message":"success","productDetails":allProduct });
    } catch(error){
        res.send({"message":error.message});
    }
});

router.post('/createProduct', verifyToken , async (req,res)=>{
    const productData = new Products({
        imageUrl:req.body.imageUrl,
        productName:req.body.name,
        productPrice:req.body.price,
        stock:req.body.quantity,
        discount:req.body.discount,
        category:req.body.category
    });
    try{
        await productData.save();
        res.send({message:'Product successfully created'});
    } catch(error){
        res.send({message:error.message});
    }
    
});

router.put('/updateProduct', verifyToken , ()=>{
    res.send({"message":"success" });
});

router.delete('/deleteProduct', verifyToken , ()=>{
    res.send({"message":"success"});
});

module.exports = router;