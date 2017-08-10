const _ = require('lodash');

const User = require('./user.model');

class UserController {

  static async all(req, res, next) {
    
  }

  static async create(req, res, next) {
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);

    await user.save();
    
    return res
      .status(200)
      .send({ user });
  }

}

module.exports = UserController;