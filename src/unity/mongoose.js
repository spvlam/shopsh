module.exports = {
    MultiMongooseObject: function(element){
        return element.map(element=>element.toObject())
    },
    MongooseObject:function(element){
        return element ? element.toObject():element
    }
}