const express = require('express')
const router = express.Router()
const ratingController = require('../controllers/rating.js')

router.post('/:id',ratingController.addRate)

module.exports = router