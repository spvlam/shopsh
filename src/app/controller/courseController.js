const course = require('../models/courses')
const fs = require('fs')
const path = require('path')
const {MultiMongooseObject}= require('../../unity/mongoose')
const{MongooseObject}= require('../../unity/mongoose')
const { callbackify } = require('util')
const cart = require('../models/cart')
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
            .then(course=>res.redirect('/'))
            .catch(err=>console.log(err))
    //  res.json(req.body)
    //  console.log(req.file)
    }
    forum(req,res,next){
      res.render('course/forum')
    }
    trolley(req,res,next){
      const product = new cart(req.body)

      product.save()
           .then(test=>{   
              res.redirect('/course/trolley/detail')
            })
           .catch(next)
    }
    trolleyDisplay(req,res,next){
      Promise.all([cart.count(),cart.find({}),cart.find({})])
      .then(value=>{
         var sumele = value[2].reduce((initial,cur)=> initial + cur.quanlity*cur.price,0)
         console.log(sumele)
         res.render('course/trolley',{layout:'user',cart:MultiMongooseObject(value[1]),count:value[0],sumele})  
      }) 
      .catch(next)
    }
    delete(req,res,next){
       cart.deleteMany({name:req.body.nameINT,quanlity:req.body.quanlity})
            .then(()=>{res.redirect('back')})
            .catch(next)
    }
    
}

module.exports = new courseController
