import openSocket from 'socket.io-client';
// TODO: un-hardcode the URL and port.
const socket = openSocket('http://localhost:8000');

function sendMessage(msg) {
  socket.emit('sendMessage', msg);
}

export { openChat, sendMessage };
