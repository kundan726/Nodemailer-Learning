const express = require('express');
require('dotenv').config();
const port = process.env.PORT
const app = express();
const indexRoutes = require('./routes/index.js');

app.use(express.json())

app.use('/',indexRoutes)


app.listen(port,()=>{
    console.log(`server listening on port - ${port}`)
})