const {Router} = require('express');

module.exports = function({HomeController}){
  const router = Router();

  router.get('/', HomeController.index); //only call reference function
  return router;
}