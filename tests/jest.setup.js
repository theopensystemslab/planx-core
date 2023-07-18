const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

// load env
const config = dotenv.config();
dotenvExpand.expand(config);
