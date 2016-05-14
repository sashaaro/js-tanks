var net = require('net');
var server = net.createServer((socket) => {
  socket.end('goodbye\n');
});

// grab a random port.
server.listen(() => {
  address = server.address();
  console.log('opened server on %j', address);
});