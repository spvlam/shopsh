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
       users.find({email:req.body.email,password:req.body.password})
         .then(user1 => {
            console.log("successfully get data")
            if (user1.length != 0) {
               courses.find({deleted:false})
               .then(course=>{
                  res.render('login/user',{layout:'user.hbs',user:MultiMongooseObject(user1),course:MultiMongooseObject(course)})
               })    
               // res.render('login/user',{layout:'user.hbs',user:MultiMongooseObject(user1)})
            }
            else{ res.redirect('back')}
         })
         .catch(()=>{
            console.log('abc')
            res.redirect('back')
         })
    
    }
    detail2(req,res,next){
      users.find({email:'testlam28@gmail.com'})
         .then(user1=>{
            courses.find({deleted:false})
            .then(course=>{
               res.render('login/user',{layout:'user.hbs',user:MultiMongooseObject(user1),course:MultiMongooseObject(course)})
            })      
         })
         .catch(next)
    }

}

module.exports = new logInController

