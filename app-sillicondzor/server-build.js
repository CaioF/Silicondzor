const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

function generateMap(docDefinition, callback) {
  try {

  } catch(err) {
    throw(err);
  }
};
///////////////////////////////////////////////////////////

//server//
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/send', function(req, res) {


  generateMap(DOCdefinition, (response) => {
    res.setHeader('Content-Type', '');
    res.send(response); // Buffer data
  });
});


app.post('/send', function (req, res) {
  JSONanswer = req.body;
  res.redirect('../send');
});

app.listen(3000);
console.log("Server is running on port 3000, set to local IP 10.55.130.239, to change the IP edit form.jsx file and rebuild");
