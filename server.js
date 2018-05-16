// npm packages needed for the server to be functional

let express = require("express"); 
let bodyParser = require("body-parser");
let path = require("path"); 



// express server configuration
let app = express(); 

// initialised port for listening to new requests
let PORT = process.env.PORT || 8080; 

// it parses incoming requests with urlencoded
app.use(bodyParser.urlencoded( {extended:true })); 
app.use(bodyParser.json()); 

//  the router helps the server to handle incoming requests
require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app); 


// listener for starting the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT); 
}); 