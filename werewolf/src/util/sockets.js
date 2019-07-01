import openSocket from 'socket.io-client';
// TODO: un-hardcode the URL and port.
const socket = openSocket('http://localhost:8000');

function openChat(history = '') {
  socket.emit('openChat', history);
}

function sendMessage(msg) {
  socket.emit('sendMessage', msg);
}

export { openChat, sendMessage };
