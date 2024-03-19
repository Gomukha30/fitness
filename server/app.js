const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});
require('./db/connection');

app.use(express.json());

app.use(require('./router/auth'));

app.get('/login',(req,res) => {
    res.send('login from the server')
});
app.get('/register',(req,res) => {
    res.send('register from the server')
});

app.listen(7736,()=>{
    console.log("running in port 7736");
});