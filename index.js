const express = require('express')
const config = require('./readfiles.js');
var configData = new Map();

config.getNetworkInfoFromFiles(function(data) {
	configData = data;
});

var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/home.html')
})

app.get('/nodeinfo', function (req, res) {
  res.json(configData.get("network_one.json"));
})

app.use(express.static('./html/'))
app.use('/vis', express.static('./node_modules/vis'))
app.use('/jquery', express.static('./node_modules/jquery'))
app.use('/jquery-ui', express.static('./node_modules/jquery'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

