var fs     = require("fs");
var data   = "";

var readStream = fs.createReadStream("input.txt"); 

readStream.setEncoding("UTF8");

readStream.on("data", function(chunk){
data += chunk;
console.log("reading data");
}
);

readStream.on("end", function(){
console.log("reading end, data is: ");
console.log(data);
}
);

readStream.on("error", function(err){
console.log("reading error is: ");
console.log(err.stack);
}
);

console.log("程序执行完毕");

