const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('sockete birileri bağlandı');

    socket.on('yeni-mesaj', function(data){
        io.emit('mesajlar', data);
    });

    socket.on('gelen-mesaj', function(data){
        io.emit('yeni-gelen', data);
    });

    socket.on('giden-mesaj', function(data){
        io.emit('yeni-giden', data);
    });

    socket.on('disconnect', function(){
        console.log('birileri geldi ve gitti');
    });
});

server.listen(5000);