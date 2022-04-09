/**
 * main purpose of Repositories : It have a crud
 */

module.exports = {
  UserRepository: require('./user.repository'),
  IdeaRepository: require('./idea.repository'),
  CommentRepository: require('./comment.repository')
}