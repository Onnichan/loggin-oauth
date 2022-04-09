const {Router} = require('express');
const {AuthMiddleware,ParseIntMiddleware} = require('../middlewares');

module.exports = function({UserController}){
  const router = Router();

  router.get('/:userId', UserController.get); //only call reference function
  router.get('', [AuthMiddleware, ParseIntMiddleware], UserController.getAll); //only call reference function
  router.patch('/:userId', UserController.update); //only call reference function
  router.delete('/:userId', UserController.delete); //only call reference function

  return router;
}