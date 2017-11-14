const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

const app = express();

app.use(morgan('dev'));

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res, next){
  res.render('index')
})

models.User.sync({force: true})
.then(function() {
  return models.Page.sync({})
})
.then(function() {
  app.listen(3000, function(){
    console.log('Server is listening on port 3000!')
  });
})
.catch(console.error);

