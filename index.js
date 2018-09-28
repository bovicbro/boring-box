/*
 * Simple Express template server
 */

// Requirements
var express = require('express'),
    engines = require('consolidate'),
    fs = require('fs');

var port=3000
// App instance
var app = express();
console.log(app.get('env'))
if (app.get('env')=='production') {
  port = 80
}

// Views
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// Default directory
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// Simple JSON file parser
var get_JSON = function(path) {
    var fileContents = fs.readFileSync(path, 'utf8');
    return JSON.parse(fileContents);
}

// Routes
app.get('/', function(req, res) {
    res.render('index.html');
});

// Go!
app.listen(port);
console.log('Listening on port 3000');
