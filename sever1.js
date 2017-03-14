var http = require("http");

var fs = require("fs");

var documentRoot = "D:/node.js/www";
var sever = http.createServer(function(req,res){

	console.log("有人进来了");
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
	// console.log(req);

	// res.writeHeader(200,{			        // 根据内容写入头部信息
	// 	"content-type":"text/html;charset='utf-8'";
	// 	res.write("这是访问的页面");        //	向页面输出内容
	// });
	// res.end();
}).listen(2222);           // 设置监听端口

console.log("开启服务");