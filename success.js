const express=require('express');


const successController = require('../controllers/contactUsSuccess');
const router=express.Router();

router.get('/success',successController.getSuccess);
router.post('/success',successController.postSuccess);

module.exports=router;




