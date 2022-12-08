const mongoose = require('mongoose')

const schema = mongoose.Schema
// or we can use const {schema} = mongoose

const user = new schema({
   email:{type:String},
   password:{type:String,unique: true},
   avatar: {type:String, default:'http://localhost:3000/img/introvert.jpg'},
   name:{type:String},
})

module.exports= mongoose.model('users',user)

