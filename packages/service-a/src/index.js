var http = require('http').createServer((req, res) => {
  res.write('foo');
  res.end();
});
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', (reason) => {
    console.log('a user disconnected: ', reason);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
