const courses = require('../models/courses');



class NewsController{
    index(req,res){
       courses.find({},function (err, docs) {
            if(!err){
                res.json(docs);
            }else{
                res.status(s00).json({ error: 'message' })
            }
          })
        
    }
    show(req,res){
        res.send('some thing here');
    }
}



module.exports= new NewsController;
