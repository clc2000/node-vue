var http = require("http");
var url = require("url");
var util = require('util');
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
	console.log("");
	console.log("--------------------------------------");
    console.log("Request for " + pathname + " received.");
 
    //response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write(util.inspect(url.parse(request.url, true)));
	
	route(pathname, response);
	
    //response.write("Hello World");
    //response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;