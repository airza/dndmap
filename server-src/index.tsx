// server.js
// where your node app starts

// init project
import express from 'express';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(request, response) {

  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
