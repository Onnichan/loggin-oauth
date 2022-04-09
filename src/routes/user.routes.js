const {Router} = require('express');

module.exports = function({UserController}){
  const router = Router();

  router.get('/:userId', UserController.get); //only call reference function
  router.get('', UserController.getAll); //only call reference function
  router.patch('/:userId', UserController.update); //only call reference function
  router.delete('/:userId', UserController.delete); //only call reference function

  return router;
}