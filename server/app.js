const http = require('http').createServer();
const io = require("socket.io")(http, {
    cors: {origin: "*"}
});

let status = false
io.on("connection", (client) => {
    console.log('new connection')
    client.emit('buttonStatus', status)
    client.on('buttonStatus', (newStatus) => {
        status = newStatus
        io.emit('buttonStatus', status)
    })
});

http.listen(8000, () => console.log('start on port 8000'))
