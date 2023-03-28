//const http=require('http');
const express=require('express');
const body_parser=require('body-parser');

const adminrouter=require('./routes/admin');
const shoprouter=require('./routes/shop');
const app=express();
app.use(body_parser.urlencoded({'extended':false}));
app.use('/admin',adminrouter);
app.use('/shop',shoprouter);
app.use((req,res,next)=>
{
    res.status(404).send('<h1>page not found</h1>');

});

app.listen(3000);
