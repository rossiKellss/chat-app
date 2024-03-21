const {Schema,model,mongoose}=require('mongoose');

const messageSchema=new Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    message:{
        type:String,
        required:true,
    }
    
},{timestamps:true});

const Messages= model("Message",messageSchema);
module.exports=Messages;