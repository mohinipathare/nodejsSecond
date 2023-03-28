const express=require('express');
const router=express.Router();
const body_parser=require('body-parser');
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><label>Enter product name:<label/><input type="text" name="title"></input><br><label>Enter product size</label><input type="text" name="product_size"></input><br><button type="submit">add product</button></form>');
});
router.post('/product',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;