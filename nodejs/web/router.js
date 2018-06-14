var fs = require('fs');

function route(pathname, response) {
  console.log("About to route a request for " + pathname);
  
  if (! fs.existsSync(pathname.substr(1))) 
  {
	response.writeHead(404, {'Content-Type': 'text/html'});
	response.end();
	return;
  }	  
  // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // 响应文件内容
         response.write(data.toString());        
      }

		response.end();
   }
   )
};
 
exports.route = route;