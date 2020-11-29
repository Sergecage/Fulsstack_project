const express = require('express')
const router = express.Router()

//all AUthors route
router.get('/', (req, res) => {
    res.render("authors/index")
})

// New Authors Route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

//Create Author Route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router 