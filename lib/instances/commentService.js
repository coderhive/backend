const CommentService = require('../services/CommentService');
const commentRepository = require('./commentRepository');

let commentService = new CommentService({commentRepository});

module.exports = commentService;