var fs = require("fs");

fs.readFile("input.txt", function(err, data){
	if(err) return console.error(err);
	else return console.log(data.toString());
}
)

console.log("程序执行结束！");