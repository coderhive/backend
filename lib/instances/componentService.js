const ComponentService = require('../services/ComponentService');
const componentRepository = require('./componentRepository');
const activityRepository = require('./activityRepository');
const followRepository = require('./followRepository');
const fanRepository = require('./fanRepository');

let componentService = new ComponentService({componentRepository, activityRepository, followRepository, fanRepository});

module.exports = componentService;