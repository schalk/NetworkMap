const config = require('./readfiles.js');
var configData = [];

config.getNetworkInfoFromFiles(function(data) {
  configData = data;
  console.log(configData[0].data.nodes);
  console.log(configData[0].data.connections);
  console.log(ExtractGraphDesc(configData[0].data.nodes, configData[0].data.connections));
});

function ExtractGraphDesc(nodes, connections) {
  var vertices = new Map();
  nodes.forEach(function(node, index) {
    var connectedVertices = [];
    connections.forEach(function(conn) {
      if(conn.to === node.id) {
        connectedVertices.push(conn.from);
      }
      if(conn.from === node.id) {
        connectedVertices.push(conn.to);
      }
    });
    vertices.set(node.id, connectedVertices);
  });
  return vertices;
}
