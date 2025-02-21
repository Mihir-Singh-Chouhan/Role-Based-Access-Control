const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async(req,res) =>{
 const {username,password,role} = req.body;
 const hashedPassword = await bcrpt.hash(password,10);
try{
 const newUser = new User({
         username,
         password:hashedPassword,
         role,
 })

 await newUser.save();

 res.status(201).json({message: `User registered with username ${username}`})

}catch(err){
    res.status(500).json({message: err.message})
}
};
const login = async(req,res) =>{
    try{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user){
          return res.status(404).json({message: `User with username ${username} not found`});
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(! isMatch){
        return res.status(404).json({message: `Password is Worng`});
    }
    const token = jwt.sign({
        id:user._id,
        role:user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h"})

    res.status(200).json({token})

    }catch(err){
        res.status(500).json({message: err.message})
    }
};

module.exports = {
    register,
    login,
}