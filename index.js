//httpモジュール	
var http = require('http');
//http.Serverクラスのインスタンス
var server = http.createServer();

//requestイベントハンドラーの定義(複数可能)
//その1
server.on('request',function(request,response){
	//リクエストされたことの表示
	console.log('request received.');
});
//その2
server.on('request',function(request,response){
	//リクエストされたURLの表示
	console.log(request.url);
	//200(OK)レスポンスと[Content-Type:text/plain]ヘッダーの送信
	response.writeHead(200,{'Content-Type':'text/plain'});
	//レスポンス内容
	response.end('Hello! '+request.url);

});

//8081ポートで待ち受け開始
server.listen(8081,'localhost');