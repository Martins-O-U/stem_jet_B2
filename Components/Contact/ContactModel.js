const db = require('../../database/db-config');

function getGuestComments() {
    return db("ContactList")
        .select('id', 'name', "email", "comment", 'number');
}

function findCommentById(id) {
    return db('ContactList')
        .where({ id }).first()
        .select('id', 'name', "email", "comment", 'number');
}

function findCommentByName(filter) {
    return db('ContactList')
        .where('name', '=', filter).first()
        .select('id', 'name', "email", "comment", 'number')
}

function insertComment(comment) {
    return db('ContactList')
        .insert(comment, 'id')
        .then(ids => {
            return findCommentById(ids[0]);
        });
}


module.exports = {
    getGuestComments,
    findCommentById,
    findCommentByName,
    insertComment,
};