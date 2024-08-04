import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:  [true, 'Name is required']
    },
    email:{
        type:String,
        required: [true, 'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    age:{
        type: Number,
        required: [true, 'age is required']

    },
    gender:{
        type:String,
        required: [true, 'Gender is required'],
        enum: ["male","female","others"]
    },
    profilePic:{
        type:String,
        default:"  "
    }
},{timestamps:true})

const User = mongoose.model("User", userSchema)
export default User