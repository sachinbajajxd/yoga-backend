const express=require('express');
const userController = require('../controllers/user.controller');

const router=express.Router();

router.post('/', userController.Register);
router.all('/*', userController.notFound);

module.exports=router;