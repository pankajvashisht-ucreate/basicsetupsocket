const { Server } = require("socket.io");
const socket = (server) => {
    const io = new Server(server, {
        cors: true,
        allowEIO3: true, // tweaking it may help
    });

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('onFinsh', async () => {
            console.log('journey finshed');
		});
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
};

module.exports = socket;