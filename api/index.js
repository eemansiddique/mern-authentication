import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected")
}).catch((error)=>{{
    console.log("error")
}})

const app=express();

app.listen(3000,()=>{
    console.log('server is running port 3000')
})