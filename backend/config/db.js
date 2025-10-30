import mongoose from "mongoose"
const connectDb = async () =>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected successfully to MongoDB Atlas")
  } catch (error) {
    console.log("Error in connecting Data Base")
  }
}
export default connectDb 