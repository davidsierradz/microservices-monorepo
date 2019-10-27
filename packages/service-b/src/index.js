var socket = require('socket.io-client')('http://service-a:3000');
socket.on('connect', function(){
  console.log('Connected to server.');
});
socket.on('event', function(data){});
socket.on('disconnect', function(){
  console.log('Disconnected to server.');
});
