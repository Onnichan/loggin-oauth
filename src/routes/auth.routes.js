const {Router} = require('express');

module.exports = function({AuthController}){
  const router = Router();

  router.post('/signup', AuthController.signUp); //only call reference function
  router.post('/signin', AuthController.signIn); //only call reference function
  return router;
}