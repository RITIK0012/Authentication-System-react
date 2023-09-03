const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express= require('express');
const app = express();
const cookies = require('cookie-parser');
dotenv.config({path: './config.env'});

require('./db/conn');

// const User = require('./model/userSchema');

//to understand json and convert it into object
app.use(express.json());
app.use(cookies());
// we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT= process.env.PORT


//middleware

// const middleware=(req , res, next)=>{
//     console.log(`Hello my Middleware`);
//     next()
// }


// app.get('/',(req,res)=>{
//     res.send(`Hello world from the server app.js`);
// });


// app.get('/about',(req,res)=>{
//     console.log(`Hello my about`);
//     res.send(`Hello world from the about`);
// });
app.get('/contact',(req,res)=>{
    res.send(`Hello world from the contact`);
});
app.get('/signin',(req,res)=>{
    res.send(`Hello login from the server`);
});
app.get('/signup',(req,res)=>{
    res.send(`Hello registration from the server`);
});

app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})