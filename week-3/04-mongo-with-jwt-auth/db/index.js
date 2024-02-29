const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kunal8011:Upes2024@cluster0.7enskgz.mongodb.net/book-selling-jwt');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    imageLink:String
});
const jwtSecret = "JhJDJFNFL";

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    jwtSecret
}