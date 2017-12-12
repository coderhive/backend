const RenderController = require("../controllers/RenderController");
let componentRepository = require("./componentRepository");

let renderController = new RenderController({ componentRepository });

module.exports = renderController;
