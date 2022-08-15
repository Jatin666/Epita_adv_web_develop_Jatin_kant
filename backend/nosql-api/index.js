const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const corsOptions = {
    origin: '*' // just for development purpose
} 

app.set('PORT',3002)

// middlewares 
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/rating',routes)
// testing api
app.listen(app.get('PORT'),()=>{
    console.log('Rating api started')
})