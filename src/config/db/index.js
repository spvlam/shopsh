// connect to mongoose

const mongoose = require('mongoose');

async function connect(){
      try {
        await mongoose.connect('mongodb://localhost/f8_education')
        console.log('connect successfully !!!')  
      }catch (error) {
        console.log('connect failed !!!')  

      }
}

module.exports = {connect}
