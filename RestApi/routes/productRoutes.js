const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Products = require('../models/Products.js');
const { verifyToken } = require('../helpers/jwthelpers.js');
const uploadFile = require("../helpers/uploadFile.js");

router.get('/getAllProductDetail', verifyToken, async (req, res) => {
    try {
        const allProduct = await Products.find();
        res.send({ "message": "success", "productDetails": allProduct });
    } catch (error) {
        res.send({ "message": error.message });
    }
});

router.post('/createProduct', verifyToken, async (req, res) => {
    // console.log('create',req.fields)
    res.send(req.files)
    // res.send(req.fields)
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
        });
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }



    // const productData = new Products({
    //     imageUrl:req.files.imageUrl,
    //     productName:req.fields.name,
    //     productPrice:req.fields.price,
    //     stock:req.fields.quantity,
    //     discount:req.fields.discount,
    //     category:req.fields.category
    // });
    // try{
    //     await productData.save();
    //     res.send({message:'Product successfully created'});
    // } catch(error){
    //     res.send({message:error.message});
    // }

});

router.delete('/deleteProduct', verifyToken, () => {
    res.send({ "message": "success" });
});

module.exports = router;