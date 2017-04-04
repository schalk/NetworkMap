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
  });}
getFiles(function(map) {  
  for(var [key, value] of map.entries()) {    
    console.log(key + ": " + value);  
  }
});
