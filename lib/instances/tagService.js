const TagService = require('../services/TagService');
const tagRepository = require('./tagRepository');

let tagService = new TagService({tagRepository});

module.exports = tagService;