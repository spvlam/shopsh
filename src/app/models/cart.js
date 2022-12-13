const mongoose = require('mongoose')

const product = new mongoose.Schema({
         user:{type:String,default:"ADMIN"},
         name:{type:String},
         quanlity:{type:Number},
         price:{type:Number},
         description:{type:String},
         imgdata:{type:Buffer},
      },{
        timestamps:true
     })

module.exports  = mongoose.model('cart',product)


