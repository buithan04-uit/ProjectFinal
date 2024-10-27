require('dotenv').config();

const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config viewEngine
configViewEngine(app);


// khai bao route
app.use('/', webRouter);




app.listen(port, hostname, () => {
    console.log(`Example app listening1 on port ${port}`)
})