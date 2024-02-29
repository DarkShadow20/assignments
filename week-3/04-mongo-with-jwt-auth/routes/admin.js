const { Router } = require("express");
const { Admin,jwtSecret, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    await Admin.create({
        username,
        password
    })
    res.json({message:"Admin created successfully"})
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const userData = await Admin.find({username,password})   
    if(userData){
        res.json({
            token:jwt.sign({
                userData}
                ,jwtSecret)
        })
    }else{
        res.json({
            message:"Admin does not exist"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const courseBody = req.body
    const id = await Course.create(courseBody)
    res.json({
        msg:"Course created successfully",
        id:id._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourseDetails = await Course.find({})
    res.json({
        courses:allCourseDetails
    })
});

module.exports = router;