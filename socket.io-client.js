const io = require('socket.io-client');

const socket = io('http://localhost:3005', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('Connected to the server');
  socket.emit('ping', 'Hello World');
});

socket.on('pong', (data) => {
  console.log('Pong received:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});
