const express = require('express');
/*const bodyParser = require('body-parser');
const fs = require('fs');
*/
const path = require('path');

const app = express();


//Reroute http to https
app.get('*', function(req, res, next) {
  if (req.get('x-forwarded-proto') != "https") {
    res.set('x-forwarded-proto', 'https');
    res.redirect('https://' + req.get('host') + req.url);
  } else {
    next();
  }
});



const pathToPublic = path.join(__dirname, 'public');
//const DATA_FILE = pathToPublic.join(__dirname, 'data.json');

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'html');

app.use('/', express.static(pathToPublic));
app.use('/index', express.static(pathToPublic));
app.use('/guest-houses', express.static(pathToPublic));
app.use('/error', express.static(pathToPublic));
app.use('/sign-in', express.static(pathToPublic));
app.use('/reset-password', express.static(pathToPublic));
app.use('/about-us', express.static(pathToPublic));
app.use('/contact-us', express.static(pathToPublic));
app.use('/apartment/*', express.static(pathToPublic));
app.use('/blogs', express.static(pathToPublic));
app.use('/blog/*', express.static(pathToPublic));
app.use('/my-account', express.static(pathToPublic));
app.use('/reset-password', express.static(pathToPublic));
app.use('/terms-of-use', express.static(pathToPublic));
app.use('/privacy-policy', express.static(pathToPublic));

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
*/


// universal routing and rendering
app.get('/', (req, res) => {
  return res.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
