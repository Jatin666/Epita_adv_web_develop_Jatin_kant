const express = require('express')
const app = express()
const users = require('./routes/users')
const movies = require('./routes/movies')
const cors = require('cors')
const corsOptions = {
    origin: '*' // just for development purpose
}

app.set('PORT', 3001)

// middlewares 
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/users', users)
app.use('/movies', movies)
    // testing api
app.listen(app.get('PORT'), () => {
    console.log('Users api started')
})