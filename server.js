const express = require('express');
const compression = require('compression');
const nocache = require('nocache')
var exphbs  = require('express-handlebars');
var metaHelper = require('./app/helpers/meta_helper');
/*const bodyParser = require('body-parser');
const fs = require('fs');
*/
const path = require('path');
const app = express();
const pathToView = path.join(__dirname, 'views');
const pathToPublic = path.join(__dirname, 'public');

app.set('port', (process.env.PORT || 8080));

//app.use(nocache());
app.use(compression());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.enable('view cache');

app.use(express.static(pathToView));
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



app.get('/heartbeat', (req, res) => {
  return res.send('<html><head></head><body>success</body></html>');
});



app.get('*', function(req, res) {
  let metaData = metaHelper.getMetaDataByUrl(req.originalUrl);

  return res.render('home', metaData);
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
