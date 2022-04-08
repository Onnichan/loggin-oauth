let _homeService = null; // private

class HomeController{
  constructor({HomeService}){
    _homeService = HomeService; 
  }

  index(req, res){
    return res.send(_homeService.index());
  }
}

module.exports = HomeController;