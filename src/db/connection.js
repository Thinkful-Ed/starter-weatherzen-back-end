const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

console.debug("connection.js", environment, config)

module.exports = knex;
