const VoteService = require('../services/VoteService');
const voteRepository = require('./voteRepository');

let voteService = new VoteService({voteRepository});

module.exports = voteService;