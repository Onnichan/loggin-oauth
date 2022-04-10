const {Router} = require('express');
const {AuthMiddleware,ParseIntMiddleware} = require('../middlewares');


module.exports = function({IdeaController}){
  const router = Router();

  router.get('', [ParseIntMiddleware], IdeaController.getAll); //only call reference function
  router.get('/:ideaId', IdeaController.get); //only call reference function
  router.get('/:userId/all', IdeaController.getUserIdeas); //only call reference function
  router.post('', IdeaController.create); //only call reference function
  router.patch('/:ideaId', [AuthMiddleware], IdeaController.update); //only call reference function
  router.delete('/:ideaId', [AuthMiddleware], IdeaController.delete); //only call reference function
  router.post(':ideaId/upvote', [AuthMiddleware], IdeaController.upvoteIdea); //only call reference function
  router.post(':ideaId/downvote', [AuthMiddleware], IdeaController.downvoteIdea); //only call reference function

  return router;
}