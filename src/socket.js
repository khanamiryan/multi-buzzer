import openSocket  from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

function handleBuzzer(cb) {
    socket.on('pushed', data => {
        cb(data);
    });
}

function clearData() {
    socket.emit('reset', true);
}

export { handleBuzzer, clearData };