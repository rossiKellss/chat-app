const {Schema,model}=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const userSchema=new Schema({
    userName:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

    gender:{
        type:String,
        required:true,
        enum:['male','female']


    },
    profilePic:{
        type:String,
        default:""
    },
    salt:{
        type:String,
    }

   
})

userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified('password')) return next() ;
    const password=user.password;
    const saltRounds=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,saltRounds);
    user.password=hash;
    user.salt=saltRounds;
    next();




})
userSchema.methods.generateToken= (result)=>{
    console.log(result);
   

    const payload={id:result._id};
    const token= jwt.sign(payload,process.env.JWT_KEY);
    return token;

    

}
const User=new model('User',userSchema);
module.exports=User;