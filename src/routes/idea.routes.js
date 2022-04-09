const {Router} = require('express');

module.exports = function({IdeaController}){
  const router = Router();

  router.get('', IdeaController.getAll); //only call reference function
  router.get('/:ideaId', IdeaController.get); //only call reference function
  router.get('/:userId/all', IdeaController.getUserIdeas); //only call reference function
  router.post('', IdeaController.create); //only call reference function
  router.patch('/:ideaId', IdeaController.update); //only call reference function
  router.delete('/:ideaId', IdeaController.delete); //only call reference function
  router.post(':ideaId/upvote', IdeaController.upvoteIdea); //only call reference function
  router.post(':ideaId/downvote', IdeaController.downvoteIdea); //only call reference function

  return router;
}