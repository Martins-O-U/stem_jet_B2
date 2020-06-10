const express = require('express');
const blogs = require('./blogControler')
const router = express.Router();


router.get('/blogs', blogs.getAllBlogs);
router.get('/blogs/:id', blogs.getBlogById);
router.post('/blogs', blogs.addBlog);
router.patch('/blogs/:id', blogs.updatePostedBlog);
router.delete('/blogs/:id', blogs.deletePostedBlog);

module.exports = router;
