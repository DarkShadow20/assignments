// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../db");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const rawToken = req.headers.authorization;
    const words = rawToken.split(" ")
    const token = words[1]
    try{
        const decodedValue = jwt.verify(token,jwtSecret)
        if(decodedValue.userData[0].username){
            next();
        }else{
            res.status(403).json({
                msg:"You are not authenticated"
            })
        }
    }catch(e){
        res.json({
            msg:"Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;