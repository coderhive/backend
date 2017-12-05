const VoteService = require('../services/VoteService');
const voteRepository = require('./voteRepository');
const fanRepository = require('./fanRepository');
const activityRepository = require('./activityRepository');

let voteService = new VoteService({voteRepository, fanRepository, activityRepository});

module.exports = voteService;