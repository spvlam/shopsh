const course = require('../models/courses')
const {MultiMongooseObject}= require('../../unity/mongoose')
const{MongooseObject}=require('../../unity/mongoose')
const { response } = require('express')
const fs = require('fs')
const path =require('path')
const { callbackify } = require('util')
async function test(courseComponent,newdata){
    await courseComponent.updateOne(newdata)
}
class meController {
    test(req,res,next){
        console.log(req.params)
        res.send('abc')
    }
    index(req,res,next){ 
        var arr={}      
        course.countDeleted()
            .then(count=>{
                arr.count=count
            })
            .catch(next)
        course.find({deleted:false})
            .then(course=>{
                arr.course=MultiMongooseObject(course)
                res.render('me/course',arr)
            })
            .catch(next)
    }
    edit(req,res,next){
        // console.log(req.params)
       course.findById(req.params.id)
             .then(course=>{
                res.render('me/fillCourse',{course:MongooseObject(course)})
             })
             .catch(next)
    }
    update(req,res,next){
        // course = new course;
        // console.log(req.params)
        course.findById(req.params.id)
            .then(course=>{
                const formdata = req.body
                formdata.imagine = `https://img.youtube.com/vi/${formdata.videoID}/sddefault.jpg`;
                formdata.img={
                    data: fs.readFileSync(path.join(__dirname +'/..'+'/..'+'/..'+'/uploads/' + req.file.filename)).toString('base64'),
                    contentType: 'image/jpeg'
                   }
                formdata.slur=formdata.title
                test(course,formdata)
                res.redirect('/')
            })
            .catch(next)
    }
    deleteHard(req,res,next){
        console.log(req.params)
        course.findOneAndDelete({_id:req.params.id})
          .then(()=>{res.redirect('back')})
          .catch(next)    
    }
    SoftDelete(req,res,next){
        console.log(req.params)
        course.delete({_id:req.params.id})
          .then(()=>{res.redirect('back')})
          .catch(next)
    }
    garbage(req,res,next){
        var arr={}      
        course.count()
            .then(count=>{
                arr.count=count
            })
            .catch(next)
        course.find({deleted:true})
            .then(course=>{
                arr.course=MultiMongooseObject(course)
                res.render('me/garbage',arr)
            })
            .catch(next)
    }
    recovery(req,res,next){
        console.log(req.params.id)
        course.restore({_id:req.params.id})
             .then(()=>{res.redirect('back')})
             .catch(next)
    }
    submitTest(req,res,next){
        if(req.body.action=='delete'){

            course.delete({_id:req.body.checkPart})
            .then(()=>{res.redirect('back')})
            .catch(next)
        }
        if(req.body.action=='Recover'){
            course.restore({_id:req.body.checkabc})
            .then(()=>{res.redirect('back')})
            .catch(next)
        }
        if(req.body.action=='Perpetual Delete'){
            // res.json(req.body.checkabc)
            // console.log(req.body.checkabc)
          async function abc(){
            await course.deleteMany({_id:req.body.checkabc})
            .then(()=>{res.redirect('back')})
            .catch(next)
          } 
          abc()
        }
        
    }
}

module.exports= new meController



