const knex = require("../db/connection");

const observations = knex("observations");

function create(newObservation) {
  return observations.insert(newObservation).returning("*");
}

async function list() {
  return observations.select("*");
}

module.exports = {
  create,
  list,
};
