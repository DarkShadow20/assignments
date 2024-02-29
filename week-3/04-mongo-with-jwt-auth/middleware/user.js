const jwt = require("jsonwebtoken")
const { jwtSecret } = require("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const rawToken = req.headers.authorization
    const words = rawToken.split(" ")
    const token = words[1]
    try{
        const decodedValue = jwt.verify(token,jwtSecret)
        if(decodedValue.userData[0].username){
            req.username = decodedValue.userData[0].username
            next();
        }
    }catch(e){
        res.status(401).json({
            msg:"Wrong inputs"
        })
    }
}

module.exports = userMiddleware;