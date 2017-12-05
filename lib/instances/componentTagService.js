const ComponentTagService = require('../services/ComponentTagService');
const componentTagRepository = require('./componentTagRepository');

let componentTagService = new ComponentTagService({componentTagRepository});

module.exports = componentTagService;