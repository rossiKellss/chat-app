const router=require('express').Router();
const userController=require('../controllers/userController');
const verifyUser=require('../middleware/protectMessage');

router.get('/',verifyUser,userController.getUsers)

module.exports=router;