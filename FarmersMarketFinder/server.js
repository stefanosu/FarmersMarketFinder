var connect = require('connect');
var servStatic = require('serv-static'); 
connect().use(servStatic(/..GooglemapsAPI)).listen(8080, function() {
	console.log('Server running on 8080');
});