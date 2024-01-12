import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
}).catch((error)=>{{
    console.log("error")
}})


const app=express();
app.use(express.json())

app.listen(3000,()=>{
    console.log('server is running port 3000')
})

app.use("/api/user",userRoutes);
app.use("/api/auth/",authRoutes)

app.use((err,req,res,next )=>{
    const statusCode=err.statusCode ||500;
    const message=err.message||'Internal Server Error'
    return res.status(statusCode).json({
        success:false,
        error:message,
        statusCode
    })
})