const res = require("express/lib/response");

let _ideaService = null;

class IdeaController{
  constructor({IdeaService}){
    _ideaService = IdeaService;
  }

  async get(req, res){
    const {ideaId} = req.params;
    const idea = await _userService.get(ideaId);
    return res.send(idea);
  }

  async getAll(req, res){
    const ideas = await _userService.getAll();
    return res.send(ideas);
  }

  async create(req, res){
    const {body} = req;
    const createdIdea = await _ideaService.create(body);
    return res.status(201).send(createdIdea);
  }

  async update(req, res){
    const {body} = req;
    const {ideaId} = req.params;
    const updateIdea = await _userService.update(ideaId, body);
    return res.send(updateIdea);
  }

  async delete(req, res){
    const {ideaId} = req.params;
    const deleteIdea = await _userService.delete(ideaId);
    return res.send(deleteIdea);
  }

  async getUserIdeas(){
    const {userId} = req.params;
    const ideas = await _ideaService.getUserIdeas(userId);
    return res.send(ideas);
  }

  async upvoteIdea(){
    const {ideaId} = req.params;
    const idea = await _ideaService.upvoteIdea(ideaId);
    return res.send(idea);
  }

  async downvoteIdea(){
    const {ideaId} = req.params;
    const idea = await _ideaService.downvoteIdea(ideaId);
    return res.send(idea);
  }
}

module.exports = IdeaController;