const db = require('../../database/db-config');

function findAllBlogs() {
    return db
        .from('blogList')
        .select(
            "blogList.id",
            "blogList.title",
            "blogList.body",
        )
        .orderBy("id", "desc")
}

function findBlogByID(id) {
    return db
        .select(
            "blogList.id",
            "blogList.title",
            "blogList.body",
        )
        .from('blogList')
        .where('blogList.id', '=', id).first();
}


function deleteBlog(id) {
    return db('blogList')
        .where({ id })
        .del();
}

function updateBlog(id, changes) {
    return db('blogList')
        .where({ id })
        .update(changes);
}

function insertBlog(information) {
    return db('blogList')
        .insert(information, 'id')
        .then(ids => {
            return findBlogByID(ids[0]);
        });
}

module.exports = {
    findAllBlogs,
    findBlogByID,
    deleteBlog,
    updateBlog,
    insertBlog,
};
