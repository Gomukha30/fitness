const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send('Hello world from the server')
});

router.post('/register', async (req,res) =>{
    const  {firstname,lastname,email,password,Dob} = req.body;
    if(!firstname || !lastname || !email || !password || !Dob ){
        return res.status(422).json({error:"please fill all the fields properly"})
    }
    try{
        const userExists = await User.findOne({ email : email });
        if(userExists){
            return res.status(422).json({error:"Email already exists"});
        }
        // const dob = new ISODate(Dob) 
        const user = new User({firstname,lastname,email,password,Dob});
        await user.save();
        res.status(201).json({message: "user registered succesfully"});
    }catch(err){
        console.log(err);
    }
});



router.post('/login', async (req,res) => {
    // console.log(req.body);
    //res.json({message:"awesome!!!"});
    try{
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json("please fill the detils");
        }
        const userLogin = await User.findOne({email:email});
        console.log(userLogin);
        if(!userLogin){
            res.status(400).json({error: "User error"});
        }else{
            res.json({message: "User logged in succesfully!!"});
        }
    }catch(err){
        console.log(err);
    }
});

module.exports = router;