const express = require('express')
const router = express.Router()
const MovieController = require("../controllers/movies");


router.get("/", MovieController.readAllMovies);

router.get("/:id", MovieController.readMovie);

router.post("/:id", MovieController.watchMovie);

router.get("/recents/:id", MovieController.recentMovies);

// router.post("/:id", MovieController.rateMovie);


module.exports = router