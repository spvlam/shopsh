const mongoose= require('mongoose')

//connecting to mongDB, especially connect to f8_education data

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://vercel-admin-user:vercel-admin-user @cluster0.ubjvpxo.mongodb.net/f8_education')
        console.log("connect sucessfully !!!")
    } catch (error) {
        if(error){
            console.log("connect failed !!!")
        }
    }
}
// why we need to export connect 
module.exports ={connect} 