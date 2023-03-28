//const http=require('http');
const express=require('express');
const app=express();
app.use('/',(req,res,next)=>{
    console.log('this always runs!');
    next();// Allows the request to continue to the next middleware in line
});
app.use('/add-products',(req,res,next)=>
{
    console.log('in middleware add-product');
    res.send('<h1>In add-product page!!!</h1>');
});
app.use('/',(req,res,next)=>
{
    console.log('in another middleware');
    res.send('<h1>In another middleware!!!</h1>');
});
//const server=http.createServer(app);
app.listen(3000);
