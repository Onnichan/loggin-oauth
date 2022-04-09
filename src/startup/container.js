const {asClass, asFunction, asValue, createContainer} = require('awilix');

const {HomeService,CommentService,IdeaService,UserService, AuthService} = require('../services');
const {HomeController,CommentController, IdeaController, UserController, AuthController} = require('../controllers');
const {Comment, User, Idea} = require('../models');
const {CommentRepository, IdeaRepository, UserRepository} = require('../repositories');

const {HomeRoutes, CommentRoutes, IdeaRoutes, UserRoutes, AuthRoutes} = require('../routes/index.routes');
const Routes = require('../routes');

const app = require('.'); // same to './index.js'
const config = require('../config');
// const userRoutes = require('../routes/user.routes');
// const ideaRoutes = require('../routes/idea.routes');

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
  HomeService: asClass(HomeService).singleton(),
  IdeaService: asClass(IdeaService).singleton(),
  CommentService: asClass(CommentService).singleton(),
  UserService: asClass(UserService).singleton(),
  AuthService: asClass(AuthService).singleton()
}).register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
  CommentController: asClass(CommentController.bind(CommentController)).singleton(),
  UserController: asClass(UserController.bind(UserController)).singleton(),
  AuthController: asClass(AuthController.bind(AuthController)).singleton()
}).register({
  HomeRoutes: asFunction(HomeRoutes).singleton(),
  UserRoutes: asFunction(UserRoutes).singleton(),
  IdeaRoutes: asFunction(IdeaRoutes).singleton(),
  CommentRoutes: asFunction(CommentRoutes).singleton(),
  AuthRoutes: asFunction(AuthRoutes).singleton()
}).register({
  Idea: asValue(Idea), // asValue because return is an object
  User: asValue(User),
  Comment: asValue(Comment)
}).register({
  UserRepository: asClass(UserRepository).singleton(),
  IdeaRepository: asClass(IdeaRepository).singleton(),
  CommentRepository: asClass(CommentRepository).singleton()
})

module.exports = container;