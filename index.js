const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 8000)
const io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {

	socket.on('getComments', function(data) {
		var url = data.url;
		socket.emit("receiveComments", "");
	});
});
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + 'public/views');

app.get('/', function(req, res) {
	res.status(200);
	res.sendFile(__dirname + "/public/views/index.html")
});