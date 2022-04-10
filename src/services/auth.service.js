const {JwtHelper} = require('../helpers');
const errorHelper = require('../helpers/error.helper');
let _userService = null;

class AuthService{
  constructor({UserService}){
    _userService = UserService
  }

  async signUp(user){
    const {username} = user;
    // console.log(user);
    const userExist = await _userService.getUserByUsername(username);
    if(userExist) errorHelper('User already exists', 401);

    return await _userService.create(user);
  }

  async signIn(user){
    const {username, password} = user;
    const userExist = await _userService.getUserByUsername(username);
    // console.log(userExist);
    if(!userExist) errorHelper('User does not exists', 404);

    const validPassword = userExist.comparePassword(password);
    if(!validPassword) errorHelper('Invalid Password', 400);

    const userToEncode = {
      username: userExist.username,
      id: userExist._id
    };

    const token = JwtHelper.generateToken(userToEncode);
    return {token, user: userExist};
  }
}

module.exports = AuthService;