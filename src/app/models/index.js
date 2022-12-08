const mongoose= require('mongoose')

//connecting to mongDB, especially connect to f8_education data

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/f8_education')
        console.log("connect sucessfully !!!")
    } catch (error) {
        if(error){
            console.log("connect failed !!!")
        }
    }
}
// why we need to export connect 
module.exports ={connect} 