const AuthenticationController = require('../controllers/AuthenticationController');
let authenticationService = require('./authenticationService');

let authenticationController = new AuthenticationController({authenticationService});

module.exports = authenticationController