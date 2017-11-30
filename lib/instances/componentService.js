const ComponentService = require('../services/ComponentService');
const componentRepository = require('./componentRepository');

let componentService = new ComponentService({componentRepository});

module.exports = componentService;