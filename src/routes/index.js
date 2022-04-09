const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const {NotFoundMiddleware, ErrorMiddleware} = require('../middlewares');
require('express-async-errors');

module.exports = function({HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes}){
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());
  /**
   *  router.use() : method use is a middleware where use() apply 
   *  middleware to all routes
   */

  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/comment', CommentRoutes);
  apiRoutes.use('/idea', IdeaRoutes);
  apiRoutes.use('/auth', AuthRoutes);

  router.use('/v1/api', apiRoutes);
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
}