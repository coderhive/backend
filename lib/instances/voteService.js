const VoteService = require('../services/VoteService');
const voteRepository = require('./voteRepository');
const fanRepository = require('./fanRepository');
const activityRepository = require('./activityRepository');
const userRepository = require('./userRepository');
const componentRepository = require('./componentRepository');

let voteService = new VoteService({voteRepository, fanRepository, activityRepository, userRepository, componentRepository});

module.exports = voteService;