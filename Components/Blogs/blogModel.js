const db = require('../../database/db-config');

function findAllBlogs() {
    return db
        .from('blogList')
        .select(
            "blogList.title",
            "blogList.body",
            "blogList.created_at"
        )
}

function findBlogByID(id) {
    return db
        .select(
            "blogList.title",
            "blogList.body",
            "blogList.created_at"
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
            return findReviewById(ids[0]);
        });
}

module.exports = {
    findAllBlogs,
    findBlogByID,
    deleteBlog,
    updateBlog,
    insertBlog,
};
