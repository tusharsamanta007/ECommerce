const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    if(!req.header("Authorization")) return res.send({message : "Token not available"});
    try{
        const bearerToken  = req.header("Authorization").split(" ");
        const token = bearerToken[1];
        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch(err){
        res.send({"status": '0', "message":err.message});
    }
}

module.exports = { verifyToken };


