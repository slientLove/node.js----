var http = require("http");

var sever = http.createServer(function(req,res){

	console.log("有人进来了");
	// console.log(req);

	res.writeHeader(200,{			        // 根据内容写入头部信息
		"content-type":"text/html;charset='utf-8'";
		res.write("这是访问的页面");        //	向页面输出内容
	});
	res.end();
}).listen(3333);           // 设置监听端口

console.log("开启服务");