const {UserService} = require('../../../src/services');
const {UserRepositoryMock} = require('../../mocks');
const {UserModelMock: {user, users}} = require('../../mocks');

describe('User Service Tests', ()=> {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return a user by id", async ()=> {

    const UserRepository = UserRepositoryMock;
    UserRepository.get.mockReturnValue(user);

    const _userService = new UserService({UserRepository});
    const expected = await _userService.get(user._id);
    expect(expected).toMatchObject(user);
  });

  it("Should return a user by username", async ()=> {
    
    const UserRepository = UserRepositoryMock;
    UserRepository.get.mockReturnValue(user);

    const _userService = new UserService({UserRepository});
    const expected = await _userService.get(user.username);
    expect(expected).toMatchObject(user);
  });

  it("Should return a user collection", async ()=> {
    
    const UserRepository = UserRepositoryMock;
    UserRepository.getAll.mockReturnValue(users);

    const _userService = new UserService({UserRepository});
    const expected = await _userService.getAll();
    expect(expected).toMatchObject(users);
  });

  it("Should update an specific user by id", async ()=> {

    const UserRepository = UserRepositoryMock;
    UserRepository.update.mockReturnValue(user);

    const _userService = new UserService({UserRepository});
    const expected = await _userService.repository.update(user._id, user);
    expect(expected).toMatchObject(user);
  });

  it("Should delete an especific user by id", async ()=> {
    
    const UserRepository = UserRepositoryMock;
    UserRepository.delete.mockReturnValue(true);

    const _userService = new UserService({UserRepository});
    const expected = await _userService.repository.delete(user._id);
    expect(expected).toEqual(true);
  });
})