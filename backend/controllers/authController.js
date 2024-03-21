const User = require('../models/userModel');
const bcrypt=require('bcrypt');
const handleError = (res, error) => {
    console.log(error);
  }
const authController = {
    register: async (req, res) => {
        try{
            
        const { userName, email, password, gender } = req.body;
        
        const boyAvatar=`https://avatar.iran.liara.run/public/boy?userName=${userName}`;
        const girlAvatar=`https://avatar.iran.liara.run/public/girl?userName=${userName}`;
        const userEmailExists=await User.findOne({email});
        const userNameExists=await User.findOne({email});

        if(userEmailExists||userNameExists){

            res.status(400).json({msg: 'Email or Username already exists'});
        }
        
        
     


        const result = await User.create({
            userName, 
            email,
            password,
            gender,
            profilePic:gender==="male" ? boyAvatar:girlAvatar
        })

        if(!result) return res.status(400).json({msg:"error creating user"});
        const token=result.generateToken(result._id);
        console.log(token);
        return res.cookie('jwt',token).json({token:token}).status(200);

        }catch(e){
            return handleError(res, e); 

        }
        


    },
    login:async(req,res)=>{
        
        try{
            const {userName,password}=req.body;
            const user=await User.findOne({userName});
            const checkPassword=await bcrypt.compare(password,user?.password||"");
            if(!user || !checkPassword){return (res.status(400).json({msg:"Invalid credentials"}))};
            const token=user.generateToken(user._id);
            return(res.cookie('jwt',token).json({token}));
        }catch(e){
            
            res.status(500).json({msg:"Internal Server Error"});


        }


    },

    logout:async(req,res)=>{
        try{
            res.status(200).cookie("jwt","").json({msg:"Logged Out succesfully"});
        }catch(e){
            res.status(500).json({msg:"Internal Server Error"});
        }
        
        
        

    }


}


module.exports = authController;