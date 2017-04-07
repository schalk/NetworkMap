var express = require('express')
var app = express()

    var nodeJSON = [
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'},
        {id: 6, label: 'Node 6'},
        {id: 7, label: 'Node 7'}
    ];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/home.html')
})

app.get('/nodeinfo', function (req, res) {
  res.json(nodeJSON)
})

app.use(express.static('./html/'))
app.use('/vis', express.static('./node_modules/vis'))
app.use('/jquery', express.static('./node_modules/jquery'))
app.use('/jquery-ui', express.static('./node_modules/jquery'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

