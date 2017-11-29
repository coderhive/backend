const AuthenticationService = require('../services/AuthenticationService')
const userRepository = require('./userRepository');

const {JWT_KEY} = require('../../env');

const authenticationService = new AuthenticationService({
   JWT_KEY,
   userRepository
});

module.exports = authenticationService;