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

app.get('/wellss', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'wellss.html'));
});

app.get('/raw', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'raw.html'));
});

app.get('/distribution', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'distribution.html'));
});

app.listen(8008);
console.log("Server is running on port 8008, set to your local IP");
