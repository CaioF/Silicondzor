const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.get('/analysis', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'analysis.html'));
});

app.get('/wells', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'wells.html'));
});

app.get('/well-data', function(req, res) {
    res.sendFile(path.join(__dirname, 'json', 'wells.json'));
});

app.listen(8008);
console.log("Server is running on port 8008, set to your local IP");
