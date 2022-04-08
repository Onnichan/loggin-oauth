const {asClass, asFunction, asValue, createContainer} = require('awilix');

const {HomeService} = require('../services');
const {HomeController} = require('../controllers');
const {Comment, User, Idea} = require('../models');

const {HomeRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

const app = require('.'); // same to './index.js'
const config = require('../config');

const container = createContainer();
/**
 *  Dependencies Injection with Awilix using the mode 
 *  InjectionMode.PROXY that is the default mode
 * 
 *  Singleton : Is a design pattern for have a same object in 
 *  all instances of class
 * 
 * 
 */

container.register({
  app: asClass(app).singleton(),
  config: asValue(config),
  router: asFunction(Routes)
}).register({
  HomeService: asClass(HomeService).singleton()
}).register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
  HomeRoutes: asFunction(HomeRoutes)
}).register({
  Idea: asValue(Idea), // asValue because return is an object
  User: asValue(User),
  Comment: asValue(Comment)
})

module.exports = container;