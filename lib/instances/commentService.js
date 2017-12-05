const CommentService = require('../services/CommentService');
const commentRepository = require('./commentRepository');
const fanRepository = require('./fanRepository');
const activityRepository = require('./activityRepository');

let commentService = new CommentService({commentRepository, fanRepository, activityRepository});

module.exports = commentService;