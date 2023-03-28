//const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
console.log('middleware 1');
next();// Allows the request to continue to the next middleware in line
});
app.use((req,res,next)=>
{
    console.log('middleware 2');
    res.send('<h1>hello from expess!!!</h1>');
});
//const server=http.createServer(app);
app.listen(3000);
