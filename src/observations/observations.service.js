const knex = require("../db/connection");

function create(newObservation) {
    return knex("observations")
        .insert(newObservation)
        .returning("*");
}

function list() {
    return knex("observations").select("*");
}

module.exports = {
    create,
    list,
}