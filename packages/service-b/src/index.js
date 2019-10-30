var socket = require("socket.io-client")("http://service-a:3000");

socket.on("connect", function() {
  socket.emit("event", { name: "bar" });
});

socket.on("disconnect", function() {});
