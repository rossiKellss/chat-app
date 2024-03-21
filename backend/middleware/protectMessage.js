const jwt=require('jsonwebtoken');
const User=require('../models/userModel');
const verifyUser=async(req,res,next)=>{
    try{
        const jwttoken=req.header('Authorization');

        if(!jwttoken)return(res.status(401).json({msg:"token not found"}));
        
        const token=jwttoken.split(" ");
       
        
    
        

        const decodedId=jwt.verify(token[1],process.env.JWT_KEY);
        
        if(!decodedId)return(res.status(401).json({msg:"Token not verified"}));
        const user=await User.findById(decodedId.id);
        
        if(!user)return(res.status(401).json({msg:"User not found"}));
        
        
        req.user=user;
        // req.user=user;
        
        next();

    }catch(err){
        
       return res.status(500).json({msg:"Internal Server Error"})
    }

};

module.exports=verifyUser;