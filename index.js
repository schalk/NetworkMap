const express = require('express')
const config = require('./readfiles.js');
var configData = [];

config.getNetworkInfoFromFiles(function(data) {
	configData = data;
});

var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/home.html')
})

app.get('/nodeinfo', function (req, res) {
  console.log(JSON.stringify(configData));
  res.json(configData);
})

app.use(express.static('./html/'))
app.use('/vis', express.static('./node_modules/vis'))
app.use('/jquery', express.static('./node_modules/jquery'))
app.use('/jquery-ui', express.static('./node_modules/jquery'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

