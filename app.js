const express=require('express');
const body_parser=require('body-parser');
const fs=require('fs');


//const loginRoute=require('./routes/user');

const app=express();

app.use(body_parser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/submitUser" method="POST">
    <label>Enter user name:<label/>
    <input id="username" type="text" name="username"></input>
    <br><button type="submit">Login</button></form>`);
});
app.post('/submitUser',(req,res,next)=>
{
    console.log(req.body);
    //console.log(localStorage.getItem);
    res.redirect('/');

});
app.get('/',(req,res)=>
{
       fs.readFile('username.txt',(err,data)=>{
         if(err)
         {
             console.log(err);
             data='No chat exist';
         }
       
        res.send(`<br><form action="/dispayUsernameAndMessage" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
        ${data}
        <br><label>Enter message:</label>
        <input type='text' name='message' id='message'><br>
        <input type='hidden' name='username' id='username'>
        <button type='submit'>submit</button></form>`);
    });
});
app.post('/dispayUsernameAndMessage',(req,res,next)=>
{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`\r\n${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>err?console.log(err):res.redirect('/'));
});
app.listen(3000);