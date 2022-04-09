const {Router} = require('express');
const {AuthMiddleware,ParseIntMiddleware, CacheMiddleware} = require('../middlewares');
const {CacheTimeHelper} = require('../helpers');

module.exports = function({UserController}){
  const router = Router();

  router.get('/:userId', UserController.get); //only call reference function
  router.get('', [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CacheTimeHelper.ONE_HOUR)], UserController.getAll); //only call reference function
  router.patch('/:userId', UserController.update); //only call reference function
  router.delete('/:userId', UserController.delete); //only call reference function

  return router;
}