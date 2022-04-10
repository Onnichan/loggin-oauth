if(process.env.NODE_ENV !== 'production'){
  const path = require('path').join(__dirname,'..', '..', '.env');
  require('dotenv').config({path})
}

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  CACHE_KEY: process.env.CACHE_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`
}