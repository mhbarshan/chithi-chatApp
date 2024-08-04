import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const generateTokenAndSetCookie = (userId,res)=>{
   const token = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:'15d'
   })

   res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,//Ms
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", //Cross-Site Request Forgery (CSRF),
    secure: process.env.NODE_ENV !== "development"
   })
}

export default generateTokenAndSetCookie;