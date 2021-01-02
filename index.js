const express = require('express');
const app = express();



const {config}= require('./config/index');
const moviesApi =require('./routes/movies.js');
const debugExpress = require('express-debug');


const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler')

//body parser
app.use(express.json());
//routes
moviesApi(app);

//catch 404
app.use(notFoundHandler);

//errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

//debug Console usar url/express-debug
debugExpress(app,{})



app.listen(config.port,function(){
    console.log(`Listening http://localhost:${config.port}`)
});

