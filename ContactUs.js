const express=require('express');
const path=require('path');

const router=express.Router();

router.get('/ContactUs',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','ContactUs.html'));
});

module.exports=router;
