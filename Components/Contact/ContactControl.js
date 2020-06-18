const router = require('express').Router();
const db = require('./ContactModel')



router.post("/messages", (req, res) => {
    let { name, email, comment, number } = req.body;
    if (name && email && comment && number) {
        db.insertComment(req.body)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(error => {
                res.status(500).json(error.message);
            })
    } else {
        res.status(400).json({ message: "Please Provide needed columns (name, email, comment)" })
    }
})

router.get("/messages", (req, res) => {
    db.getGuestComments()
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(error => {
            res.status(500).json({ message: "Oops!, Something went wrong. " + error.message })
        })
})

router.get("/messages/:id", (req, res) => {
    db.findCommentById(req.params.id)
        .then(comment => {
            if (comment) {
                res.status(200).json(comment)
            } else {
                res.json({ message: `A Message with ID ${req.params.id} does not exist in the database` })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong:-" + error.message })
        })
})

router.get("/messages/:name", (req, res) => {
    db.findCommentByName(req.params.id)
        .then(comment => {
            if (comment) {
                res.status(200).json(comment)
            } else {
                res.json({ message: `A Message with a sender name "${req.params.id}" does not exist in the database` })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong:-" + error.message })
        })
})


module.exports = router