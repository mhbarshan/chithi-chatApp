import path from "path"
import express from "express";
import dotenv  from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongo from "./db/db.js";

import authRoutes from "./route/authRoute.js"
import messageRoutes from "./route/messageRoute.js"
import userRoutes from "./route/userRoute.js"
import {app, server} from './socket/socket.js'


dotenv.config();

const __dirname = path.resolve()

// const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))


app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"frontend","dist","index.html")) 
})





server.listen(port,()=> {
    connectToMongo()
    console.log(`Server running on port http://localhost:${port}`)
}) 