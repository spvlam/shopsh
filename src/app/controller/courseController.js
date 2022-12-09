const course = require('../models/courses')
const fs = require('fs')
const path = require('path')
const {MultiMongooseObject}= require('../../unity/mongoose')
const{MongooseObject}= require('../../unity/mongoose')
const { callbackify } = require('util')
class courseController {
     
     index(req,res,next){
        course.find({deleted:false})
            .then(course=>{
              
               res.render('course/course',{course:MultiMongooseObject(course)})
            })
            .catch(next)
     }
     show(req,res,next){
        course.findOne({slur:`${req.params.slur}`})
             .then(detail=>{  
                  course.find({})
                    .then(course1=>{    
                       res.render('course/detail',{course:MongooseObject(detail),course2:MultiMongooseObject(course1)})
                    })
             })
             .catch(next)
     }
    create(req,res,next){
         res.render('course/create')
    }
     store(req,res,next){
       const formdata = req.body
       formdata.imagine = `https://img.youtube.com/vi/${formdata.videoID}/sddefault.jpg`;
       formdata.slur=formdata.title
       formdata.img={
        data: fs.readFileSync(path.join(__dirname +'/..'+'/..'+'/..'+'/uploads/' + req.file.filename)).toString('base64'),
        contentType: 'image/jpeg'
       }
       const coursea = new course(formdata)
       coursea.save()
            .then(course=>res.redirect('back'))
            .catch(err=>console.log(err))
    //  res.json(req.body)
    //  console.log(req.file)
    }
    forum(req,res,next){
      res.render('course/forum')
    }
}

module.exports = new courseController
