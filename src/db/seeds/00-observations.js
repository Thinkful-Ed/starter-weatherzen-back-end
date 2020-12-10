const observations = require("./00-observations.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE observations RESTART IDENTITY CASCADE")
    .then(() => knex("observations").insert(observations));
};
