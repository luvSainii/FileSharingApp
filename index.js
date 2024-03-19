const express = require('express');
const connectdb  = require('./config/db');
require('dotenv').config();
const app = express();

// connect to database
connectdb()

app.use('/api/files',require('./routes/files'))

app.listen(4000,()=>{
    console.log(`SERVER RUNNING ON PORT ${process.env.port}`)
})