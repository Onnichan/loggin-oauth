if(process.env.NODE_ENV !== 'production'){
  const path = require('path').join(__dirname,'..', '..', '.env');
  require('dotenv').config({path})
  // console.log(module);
}

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  CACHE_KEY: process.env.CACHE_KEY
}