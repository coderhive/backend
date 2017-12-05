const ComponentService = require('../services/ComponentService');
const componentRepository = require('./componentRepository');
const activityRepository = require('./activityRepository');
const followRepository = require('./followRepository');

let componentService = new ComponentService({componentRepository, activityRepository, followRepository});

module.exports = componentService;