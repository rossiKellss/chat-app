const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const cookieparser=require('cookie-parser');
const userRoute=require('./routes/userRoute')

const connectToMongo=require('./connection/connection');
const authRoute=require('./routes/authRoute');
const messageRoute=require('./routes/messageRoute');
const app=express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET', 'POST','UPDATE', 'DELETE']

}))
app.use(cookieparser());

app.use('/auth',authRoute);
app.use('/message',messageRoute);
app.use('/user',userRoute);

connectToMongo(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connection established")
}).catch((e)=>{
    console.log("error connecting to MongoDB: " + e.message);
})



app.listen('5000',()=>{
    console.log('listening on port 5000');
})