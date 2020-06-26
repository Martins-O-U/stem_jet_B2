const db = require('../../database/db-config');

function findAllPersons() {
    return db
        .from('RegisteredList')
        .select(
            "RegisteredList.id",
            "RegisteredList.name",
            "RegisteredList.email",
        )
}

function findPersonByID(id) {
    return db
        .select(
            "RegisteredList.id",
            "RegisteredList.name",
            "RegisteredList.email",
        )
        .from('RegisteredList')
        .where('RegisteredList.id', '=', id).first();
}

function insertPersons(persons) {
    return db('RegisteredList')
        .insert(persons, 'id')
        .then(ids => {
            return findPersonByID(ids[0]);
        });
}

module.exports = {
    findAllPersons,
    insertPersons,
};
