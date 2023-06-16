const  express = require('express');
const app = express();

const port = 8001;

// Require ejs layouts
const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');


// Encode url so that you can read the form data
app.use(express.urlencoded());


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// use express router
app.use('/', require('./routes'));


// Listen on port 8001
app.listen(port, function(err){
    if(err){
        console.log('Error in establishing connection to port 8001');
    }
    console.log('Server up and running on port 8001');
});

