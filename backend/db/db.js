import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const mongoUrl = process.env.MONGO_DB_URI
const connectToMongo = async ()=>{
  try {
    await mongoose.connect(mongoUrl)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log(error.message)
  }
}

export default connectToMongo

