import openSocket  from 'socket.io-client';
const socket = openSocket('http://192.168.1.207:4000');

function clearData() {
    socket.emit('resetSignalSequence');
}

function handleBuzzer(cb) {
    socket.on('touchSignal', data => cb(data));
}

function toggleConnection(open) {
    socket.emit('resetSignalSequence', open);
}

function hasConnection(cb) {
    socket.on('toggleConnection', data => cb(data));
}

export { handleBuzzer, clearData, toggleConnection, hasConnection };