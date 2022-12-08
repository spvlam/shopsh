// connect to mongoose

const mongoose = require('mongoose');

async function connect(){
      try {
        await mongoose.connect('mongodb+srv://vercel-admin-user:0986957795@cluster0.ubjvpxo.mongodb.net/f8_education?retryWrites=true&w=majority')
        console.log('connect successfully 2 !!!')  
      }catch (error) {
        console.log('connect failed !!!')  

      }
}

module.exports = {connect}
