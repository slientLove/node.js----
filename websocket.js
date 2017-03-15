var http = require("http");

var fs = require("fs");
var io = require("socket.io");

var documentRoot = "D:/node.js/www";
var sever = http.createServer(function(req,res){

	var url = req.url;
	var file = documentRoot+url;
	console.log(file);
	fs.readFile(file,function(err,data){
		if(err){
              res.writeHeader(404,{
              "content-type":"text/html;charset='utf-8'"
              });
              res.write("<h1>404错误，你所要找的页面不存在</h1>");
              res.end();
		}else{
              res.writeHeader(200,{
              "content-type":"text/html;charset='utf-8'"
              });
              res.write(data);
              res.end();
		}

	});
}).listen(2222);           // 设置监听端口

console.log("开启服务");
var socket = io.listen(sever);		 // 通过socket监听客户端请求
socket.sockets.on("connection",function(socket){
	console.log("有人通过socket进来了");

	socket.emit("hill","您好");       // 在服务器端绑定一个hill事件，发送数据为 “您好”
	// socket.on("thanks",function(data){     // 事件监听，在服务器端接收客服端发送的数据
	// 	console.log(data);
	// });


	// 进行广播
	socket.broadcast.emit("new","有新的用户登陆进来了");
	socket.on("move",function(data){
		socket.broadcast.emit("move",data);
	});
});
