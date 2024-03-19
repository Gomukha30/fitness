const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //firstname, lastname, email, pass, confirmpass, usertype
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    // cpassword:{
    //     type: String,
    //     required: true
    // },
    // usertype:{
    //     type: String,
    //     required: true
    // }
    Dob:{
    type: Date,
    required: true 
    }
})

const User = mongoose.model('USER',userSchema);

module.exports = User;