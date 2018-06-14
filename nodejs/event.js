var events = require("events");

var eventEmitter = new events.EventEmitter();

var handler = function funcHandler()
{
	console.log("事件event1发生了！");
}

eventEmitter.on("event1", handler);

eventEmitter.emit("event1");

console.log("程序执行完毕！");

