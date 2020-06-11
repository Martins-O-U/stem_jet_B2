const blogPosts = require('./blogModel');

const getAllBlogs = async (req, res) => {
    try {
        const allPosts = await blogPosts.findAllBlogs();
        return res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogPosts.findBlogByID(id);
        return res.status(200).json(blog);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const addBlog = async (req, res) => {
    try {
        const newBlogPost = req.body;
        const newPost = await blogPosts.insertBlog(newBlogPost);
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


const updatePostedBlog = async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        await Reviews.updateReview(id, changes);
        const updatedReview = await blogPosts.updateBlog;
        return res.status(200).json(updatedReview);
    } catch (error) {
        Sentry.captureException(error);
        return res.status(500).json({ error: error.message });
    }
};

const deletePostedBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await blogPosts.deleteBlog(id);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addBlog,
    getAllBlogs,
    updatePostedBlog,
    getBlogById,
    deletePostedBlog,
};
