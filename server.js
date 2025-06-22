import express from 'express'
import cors from "cors"
import 'dotenv/config.js'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
// app.use(cors()) 

import cors from "cors"; //we can access the backend from any ip

const allowedOrigins = [
  "https://hungry-nutrition-website-git-master-pappu-kumar-yadavs-projects.vercel.app",
  "https://hungry-nutrition-website.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

//api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)


app.get('/',(req,res)=>{
    res.send("api working")
})


app.listen(port,()=>
    console.log("Server started on PORT :" + port)
)