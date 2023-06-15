const  express = require('express');
const app = express();

const port = 8001;



// Listen on port 8001
app.listen(port, function(err){
    if(err){
        console.log('Error in establishing connection to port 8001');
    }
    console.log('Server up and running on port 8001');
})