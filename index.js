var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var PORT = 8081;

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/timesync', function (req, res) {
  var data = {
    id: (req.body && 'id' in req.body) ? req.body.id : null,
    result: Date.now()
  };
  res.json(data);
});

app.listen(PORT);
console.log('Server listening at http://localhost:' + PORT);
