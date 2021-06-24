// import openSocket  from 'socket.io-client';
// const socket = openSocket('http://localhost:5000');
//
// function clearData() {
//     socket.emit('reset', true);
// }
//
// function handleBuzzer(cb) {
//     socket.on('pushed', data => cb(data));
// }
//
// function toggleConnection(open) {
//     socket.emit('toggleConnection', open);
// }
//
// function hasConnection(cb) {
//     socket.on('toggleConnection', data => cb(data));
// }
//
// export { handleBuzzer, clearData, toggleConnection, hasConnection };