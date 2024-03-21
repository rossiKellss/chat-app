const {Router}=require('express');
const messageHandle=require('../controllers/messageController');
const verifyUser=require('../middleware/protectMessage')

const router=Router();
router.get('/recieve/:id',verifyUser,messageHandle.get);
router.post('/send/:id',verifyUser,messageHandle.send);

module.exports=router;