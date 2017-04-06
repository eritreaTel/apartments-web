const express = require('express');
/*const bodyParser = require('body-parser');
const fs = require('fs');
*/
const path = require('path');
const app = express();
const pathToPublic = path.join(__dirname, 'public');

app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'html');


app.use(function(req, res, next) {
  if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https') && req.originalUrl != '/heartbeat.html') {
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


app.use('/', express.static(pathToPublic));
app.use('/index', express.static(pathToPublic));
app.use('/guest-houses', express.static(pathToPublic));
app.use('/error', express.static(pathToPublic));
app.use('/sign-in', express.static(pathToPublic));
app.use('/reset-password', express.static(pathToPublic));
app.use('/about-us', express.static(pathToPublic));
app.use('/contact-us', express.static(pathToPublic));
app.use('/apartment/*', express.static(pathToPublic));
app.use('/combo-apartment/*', express.static(pathToPublic));
app.use('/blogs', express.static(pathToPublic));
app.use('/blog/*', express.static(pathToPublic));
app.use('/your-trip', express.static(pathToPublic));
app.use('/your-trip/*', express.static(pathToPublic));
app.use('/my-account', express.static(pathToPublic));
app.use('/reset-password', express.static(pathToPublic));
app.use('/terms-of-use', express.static(pathToPublic));
app.use('/privacy-policy', express.static(pathToPublic));

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
*/


// universal routing and rendering
app.get('/', (req, res) => {
  if (req.originalUrl == '/heartbeat.html') {
    return res.render('heartbeat');
  } else {
    return res.render('index');

  }
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
