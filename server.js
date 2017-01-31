const express = require('express');
/*const bodyParser = require('body-parser');
const fs = require('fs');
*/
const path = require('path');

const app = express();
const pathToPublic = path.join(__dirname, 'public');
//const DATA_FILE = pathToPublic.join(__dirname, 'data.json');

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
