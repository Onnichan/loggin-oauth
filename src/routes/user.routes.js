const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares');

module.exports = function({UserController}){
  const router = Router();

  router.get('/:userId', UserController.get); //only call reference function
  router.get('', [AuthMiddleware], UserController.getAll); //only call reference function
  router.patch('/:userId', UserController.update); //only call reference function
  router.delete('/:userId', UserController.delete); //only call reference function

  return router;
}