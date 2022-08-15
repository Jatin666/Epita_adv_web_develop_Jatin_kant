const express = require('express')
const app = express()
const routes = require('./api-gateway-routes')
const cors = require('cors')
const corsOptions = {
    origin: '*' // just for development purpose
} 
app.use(cors(corsOptions))
app.use(express.json())
app.set('PORT',4000)

app.use('/',routes)

app.listen(app.get('PORT'),()=>{
    console.log('Gateway has started on port',app.get('PORT'))
})