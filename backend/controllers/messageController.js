const Conversation=require('../models/conversationModel');
const Messages=require('../models/messageModel');

const messageHandle={
    send:async(req,res)=>{
       try{
        const {id:reciverId}=req.params;
        
        const {message}=req.body;
        const id=(req.user._id.toString());
        const senderId=id;
        let conversation= await Conversation.findOne({
            participants:{$all:[senderId,reciverId]}
        })

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,reciverId]
            })
        }

        const newMessage= await Messages({
            senderId,reciverId,message
        })

        

        
        if(newMessage){
           
            conversation.messages.push(newMessage._id);
            
            
            
        }
        

        await Promise.all([conversation.save(),newMessage.save()])
        res.status(200).json({newMessage});




       }catch(e){
        console.log(e.message);
        res.status(500).json({msg:"Internal Server Error"});
       }
    },

    get:async(req,res)=>{
        try{
        const senderId=req.user._id;
        const {id:reciverId}=req.params;
        const conversation=await Conversation.findOne({participants:{$all:[senderId,reciverId]}}).populate("messages");

        if(!conversation)return res.status(404).json({msg:"messages not found"});
        
        res.status(200).json(conversation.messages);
        }catch(e){
            console.log(e);
            res.status(500).json({msg:"Error occured"})
        }
        



    }
}

module.exports=messageHandle;