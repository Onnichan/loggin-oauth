const {Router} = require('express');

module.exports = function({CommentController}){
  const router = Router();

  router.get('/:commentId/unique', CommentController.get); //only call reference function
  router.get('/:ideaId', CommentController.getIdeaComments); //only call reference function
  router.post('/:ideaId', CommentController.createdComment); //only call reference function
  router.patch('/:commentId', CommentController.update); //only call reference function
  router.delete('/:commentId', CommentController.delete); //only call reference function

  return router;
}