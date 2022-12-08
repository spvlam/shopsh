const course = require('../models/courses')
const  { MultiMongooseObject } = require('../../unity/mongoose')
class SiteController{
    index(req,res,next){
        
        //get data from mongoDB
         course.find({})
         //because of security error, hdb does not allow us to access into key of an object      
            .then((course)=>{   
                
                res.render('home',{ course : MultiMongooseObject(course) })})
            .catch(next)
    }
}

module.exports = new SiteController;