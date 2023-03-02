const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const CONSTANTS = require('../config/constant');

const userRegisterController = function(req,res){
    console.log("Registering the user");
    const userDetails = req.body;
    console.log("Recieved user details =>", userDetails);
    const name = userDetails.name;
    const phone = userDetails.phone;
    const email = userDetails.email;
    const password = userDetails.password;
    const roundsOfSalt = 10;

    try{
        bcrypt.genSalt(roundsOfSalt, function(err, salt){
            if(err){
                console.log(err);
                res.status(500).json({
                    message : "User has not registered, please try again."
                })
            }
            else{
                bcrypt.hash(password, salt, function(err,hashedPassword){
                    if(err){
                        console.log(err);
                        res.status(500).json({
                            message : "User has not registered, please try again."
                        })
                    }
                    else{
                        console.log("User has registered successfully ")
                        CONSTANTS.userDetails.push({
                            name,email,phone,password : hashedPassword
                        })
                       res.status(200).json({
                        message : "User has registered successfully ",
                       })
                    }
                })
            }
        })
    }
    catch(err) {
        res.status(200).json({
            message : "User has registered successfully "
           })
    }
    
};

module.exports = {userRegisterController};