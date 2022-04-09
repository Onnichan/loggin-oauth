const BaseRepository = require('./base.repository');

let _comment = null;
class CommentRepository extends BaseRepository{
  constructor({Comment}){
    super(Idea);
    _comment = Comment;
  }

  // async getUserIdeas(author){
  //   return await _idea.find({author});
  // }
}

module.exports = CommentRepository;