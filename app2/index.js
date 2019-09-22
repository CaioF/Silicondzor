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
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, 'json', 'result_example.json'));
=======
    res.sendFile(path.join(__dirname, 'json', 'wells.json'));
>>>>>>> e58f3750a26ef0d2abc5089936f91028dfac8f33
});

app.listen(8008);
console.log("Server is running on port 8008, set to your local IP");
