const ActivityService = require('../services/ActivityService');
const activityRepository = require('./activityRepository');
const componentRepository = require('./componentRepository');
const userRepository = require('./userRepository');
const commentRepository = require('./commentRepository');

let activityService = new ActivityService({activityRepository, componentRepository, userRepository, commentRepository});

module.exports = activityService;