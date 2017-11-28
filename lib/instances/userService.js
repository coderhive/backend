const UserService = require('../services/UserService');
const userRepository = require('./userRepository');

let userService = new UserService({userRepository});

module.exports = userService;