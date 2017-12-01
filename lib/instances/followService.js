const FollowService = require('../services/FollowService');
const followRepository = require('./followRepository');

let followService = new FollowService({followRepository});

module.exports = followService;