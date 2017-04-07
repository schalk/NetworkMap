var dir = require('node-dir');

function getFiles(callback) {
  var fileMap = new Map();
  dir.readFiles(__dirname + '/data', {
      match: /.json$/,
      shortName: true,
      exclude: /^\./
      }, function(err, content, filename, next, callback) {
          if (err) throw err;
          fileMap.set(filename, content);
          next();
      },
      function(err) {
        callback(fileMap);
      });
}

function processFileData(filename, data) {
  console.log("file: " + filename);
  var hostMap = new Map();

  data.nodes.forEach(function(node, index) {
    node.id = index;
    hostMap.set(node.host, node.id);
  });

  data.connections.forEach(function(conn, index) {
    conn.id = index;
    conn.to = hostMap.get(conn.to);
    conn.from = hostMap.get(conn.from);
  });

  return data;
}

exports.getNetworkInfoFromFiles = function (callback) {
  getFiles(function(map) {
    var fileMap = new Map();
    for(var [key, value] of map.entries()) {
      fileMap.set(key, processFileData(key, JSON.parse(value)));
    }
    callback(fileMap);
  });
}

