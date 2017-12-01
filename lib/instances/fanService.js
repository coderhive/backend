const FanService = require('../services/FanService');
const fanRepository = require('./fanRepository');

let fanService = new FanService({fanRepository});

module.exports = fanService;