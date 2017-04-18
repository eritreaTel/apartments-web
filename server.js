const express = require('express');
var exphbs  = require('express-handlebars');
/*const bodyParser = require('body-parser');
const fs = require('fs');
*/
const path = require('path');
const app = express();
const pathToPublic = path.join(__dirname, 'views');

app.set('port', (process.env.PORT || 8080));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(pathToPublic));


app.use(function(req, res, next) {
  if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https') && req.originalUrl != '/heartbeat') {
    res.redirect('https://' + req.get('Host') + req.url);
  }
  else
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.get('/heartbeat', (req, res) => {
  return res.send('<html><head></head><body>success</body></html>');
});

app.get('/', (req, res) => {
  return res.render('home');
});

app.get('/index', (req, res) => {
  return res.render('home');
});

app.get('/guest-houses', (req, res) => {
  return res.render('home');
});

app.get('/sign-in', (req, res) => {
  return res.render('home');
});

app.get('/reset-password', (req, res) => {
  return res.render('home');
});

app.get('/about-us', (req, res) => {
  return res.render('home');
});

app.get('/contact-us', (req, res) => {
  return res.render('home');
});

app.get('/apartment/*', (req, res) => {
  return res.render('home');
});

app.get('/combo-apartment/*', (req, res) => {
  return res.render('home');
});

app.get('/blogs', (req, res) => {
  return res.render('home');
});

app.get('/blog/*', (req, res) => {
  return res.render('home');
});

app.get('/your-trip', (req, res) => {
  return res.render('home');
});

app.get('/your-trip/*', (req, res) => {
  return res.render('home');
});

app.get('/my-account', (req, res) => {
  return res.render('home');
});

app.get('/reset-password', (req, res) => {
  return res.render('home');
});

app.get('/terms-of-use', (req, res) => {
  return res.render('home');
});

app.get('/privacy-policy', (req, res) => {
  return res.render('home');
});

app.get('/error', (req, res) => {
  return res.render('home');
});

app.get('/', (req, res) => {
    return res.render('home');
});



app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
