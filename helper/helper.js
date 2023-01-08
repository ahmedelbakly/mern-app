const mongoose = require('mongoose')
const { Schema } = mongoose;
const express = require("express");
const router = express.Router();




const userSchema  = new Schema({
    name :String,
    lastName:String,
    age:Number,
})

 const  User = mongoose.model("User",userSchema)

const getUsers = async(req, res) => {
  const{index}= req.params;
  if (index) {
  const users = await User.find()
  res.json(users[index])
  }
 
}
const PostUser =  async(req, res,next) => {
  const {name , lastName,age} = req.body
    const user  = User.create({
        name :name,
        lastName:lastName,
        age:age,
    })
  res.send('user is add');
}



router.post("/user/addUser", PostUser)
router.get("/user/getUsers/:index", getUsers)



module.exports = router