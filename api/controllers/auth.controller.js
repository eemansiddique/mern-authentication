import User from '../models/usermodel.js'
import bcryptjs from 'bcryptjs';
export const signup=async (req,res,next)=>{
   
   try{
    const{username,email,password}=req.body;
    const hashedpassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,password:hashedpassword});
    await newUser.save()
    
    res.status(201).json({message:"user created successfully"})
    
   } catch (error){
    next(error)
   }
  }
    

// export const signup=async (req,res)=>{
//     res.json({message:"api working"})    
//  }