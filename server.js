const express  = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db')
const PORT = process.env.PORT || 5000
const router = require('./routers/Index')

// db connection
db.connect()

// middleware
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({ extended:true,limit:"50mb"}))

app.use(express.json())

// headers
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next()
})
// api
app.use('/api',router)

// cors
app.use(cors())

// listning
app.listen(PORT , ()=>{
    console.log("Server lisning on port 5000")
})