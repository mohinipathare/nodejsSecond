//const http=require('http');
const express=require('express');
const body_parser=require('body-parser');
const app=express();
app.use(body_parser.urlencoded({'extended':false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label>Enter product name:<label/><input type="text" name="title"></input><br><label>Enter product size</label><input type="text" name="product_size"></input><br><button type="submit">add product</button></form>');
});
app.post('/product',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>
{
    res.send('<h1>hello from express!!!</h1>');
});
app.listen(3000);
