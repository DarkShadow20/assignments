const { Router } = require("express");
const { User, jwtSecret, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    await User.create({
        username:username,      
        password:password
    })
    res.json({
        msg:"User Created Successfully"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const userData = await User.find({username,password})
    const token = jwt.sign({
        userData
    },jwtSecret)
    res.json({
        token:token
    })
}); 

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courseDetails = await Course.find({})
    res.json({
        courses:courseDetails
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.username
    console.log(courseId,username)
    await User.findOneAndUpdate({
        username:username
    },{
        "$push":{
            purchasedCourse:courseId
        }
    })
    res.json({
        message:"Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    const userDetail = await User.findOne({
        username:username
    })
    const courseDetail = await Course.find({
        _id:{
            "$in":userDetail.purchasedCourse
        }
    })
    
    res.json({
        purchasedCourses:courseDetail
    })
});

module.exports = router