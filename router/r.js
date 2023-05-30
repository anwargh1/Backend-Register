const express =require("express")

const RModel = require("../models/r")
const unvirsityIdModel = require("../models/universityId")

const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { fullName,email,major,gender,unvirsityIdUser,phone,userName,password }=req.body
   const user = await RModel.findOne({unvirsityIdUser : unvirsityIdUser})
   user && res.json({message: "User alredy exist!" })
   const universityIdForUser = await unvirsityIdModel.findOne({ unvirsityId: unvirsityIdUser});
   console.log(universityIdForUser)
   console.log(unvirsityIdUser)
   !universityIdForUser && res.status(404).json({ message: "User does not exist!" }); 
      
  if(universityIdForUser){
   console.log(req.body) 
    try {  
        const hashedPassword = bcrypt.hashSync(password,10)  
        const newUser = new RModel({
            fullName, 
            email,
            major,
            gender,
            unvirsityIdUser,
            phone,
            userName,
            password:hashedPassword
          });
        
      await newUser.save();
      res.send(newUser)
      //res.send('User registered successfully');
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  }}
  
  module.exports = {
    registerUser,
  }; 



  