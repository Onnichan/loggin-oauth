const container = require('./src/startup/container'); // call a container
const server = container.resolve('app');
const {MONGO_URI} = container.resolve('config');

const mongoose = require('mongoose');
mongoose
  .connect(MONGO_URI)
  .then(()=> server.start())
  .catch(console.log);