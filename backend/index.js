import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import doctorRoute from "./routes/doctor.js"
import reviewRoute from "./routes/review.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = { origin:true }

app.get('/',(req,res) => {
    res.send("Api is working")
})

/////////////////////DATABASE CONNECTION////////////////////
mongoose.set('strictQuery', false)
const connectDb = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mongoDb Atlas Connected')
    }
    catch(err){
        console.log('mongoDb Atlas Connection error')
    }
}


/////////////////////MIDDLEWEAR////////////////////////////
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

///////////////////////ROUTES////////////////////////////
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/doctor',doctorRoute)
app.use('/api/v1/review',reviewRoute)

app.listen(port,()=>{ 
    connectDb() 
    console.log("Server is running on port "+port)
})