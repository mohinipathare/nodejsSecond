const express=require('express');
//const path=require('path');

const router=express.Router();

const contactusController = require('../controllers/contactUsSuccess');

router.get('/ContactUs',contactusController.getContactUs);

module.exports=router;
