require('dotenv').config();

const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
// get client
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// confid req.body
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

// config viewEngine
configViewEngine(app);


// khai bao route
app.use('/', webRouter);

// test connection




app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})