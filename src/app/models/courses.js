const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema
// create new schema for course
const course = new Schema({
    title:{type: String},
    description:{type: String},
    slur:{type:String},
    level:{type:String},
    videoID:{type:String},
    imagine:{type:String},
    img:{
        data:Buffer,
        contentType:String

    },
    deleted:{type:Date},
},
{
    timestamps:true
})

course.plugin(mongooseDelete,{ deletedAt : true , overrideMethods: ['count'] })
// use schema course to assifn for courses data in mongooseBD
module.exports = mongoose.model('courses',course)