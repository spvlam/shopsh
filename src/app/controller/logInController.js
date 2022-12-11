const users = require('../models/users')
const courses = require('../models/courses')
//because hbs make mistake with object
const {MultiMongooseObject}= require('../../unity/mongoose')
const{MongooseObject}= require('../../unity/mongoose')
class logInController
{
    index(req,res,next){
        res.render('logIn/signUp',{layout: 'login.hbs'})
    }
    detail(req,res,next){
       const user = users.find({email:req.body.email,password:req.body.password})
       const course = courses.find({deleted:false})
       Promise.all([user,course])
          .then(values=>{
            if(values[0].length!=0){
               res.render('Login/user',{layout:'user.hbs',user:MultiMongooseObject(values[0]),course:MultiMongooseObject(values[1])})
            }else{
               res.redirect('back')
            }
          })
          .catch(next)
    }
    detail2(req,res,next){
     const user = users.find({email:'spvlam28@gmail.com'})
     const course =  courses.find({deleted:false})
     Promise.all([user,course])
         .then(values=>{
            if(values[0].length!=0){
               res.render('Login/user',{layout:'user.hbs',user:MultiMongooseObject(values[0]),course:MultiMongooseObject(values[1])})
            }else{
               res.redirect('back')
            }
         })
         .catch(next)
    }

}

module.exports = new logInController

