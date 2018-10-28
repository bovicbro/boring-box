// Requirements
const express = require('express');
const engines = require('consolidate');

const port=3000;
// App instance
const app = express();
console.log(app.get('env'));
if (app.get('env')=='production') {
  port = 80;
}

// Views
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// Default directory
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// Routes
app.get('/', function(req, res) {
  res.render('index.html');
});

// Go!
app.listen(port);
console.log('Listening on port 3000');
