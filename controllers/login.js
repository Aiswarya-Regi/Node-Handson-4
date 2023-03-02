const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const CONSTANTS = require('../config/constant');

const userLoginController = function(req,res){
    console.log("User logging in");
    const loginData = req.body;
    if(loginData.name && loginData.password){
        console.log("Recieved login data =>", loginData);
     const user =    CONSTANTS.userDetails.find(user => user.name === loginData.name);
     if(user){
              bcrypt.compare(loginData.password,user.password,(err,result) =>{
                if(!result){
                    console.log(result)
                    res.status(400).json({message:"Invalid credentials"});
                }else{
                    const jwtToken = jwt.sign(loginData, CONSTANTS.SECRET_KEY);
                     res.status(200).json({
                        "message" : "User logged in successfully.",
                        "token": jwtToken});
                }
              })
     }else{
        res.status(400).json({message:"Invalid credentials"});
     }
        
    }
    else{
        return res.status(400).json({message:"Invalid credentials"});
    }
};

module.exports = {userLoginController};