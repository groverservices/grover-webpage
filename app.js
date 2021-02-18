var express = require('express'),
    path = require('path'),
    app = express();
    
const uri = '/';
var app_directory = `grover-webpage`; // Files and assets directory

// Add the abillity to serve our static files from the public directory
app.use(uri, express.static(`/home/grovqbrq/${app_directory}/public`));
    
app.get(uri, function(req, res) {
    res.set('dirname', __dirname);
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Listen for requests
app.listen();