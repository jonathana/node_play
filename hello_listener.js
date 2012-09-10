var tcp = require("tcp");

tcp.createServer(function(c) {
	c.send("hello!\n");
	c.close();
}).listen(7000);
