var request = require('request');
var setting = require('./setting.json');
var url = setting.webhook_url;
console.log('送信先:' + url);

var send=function(mes){
	var options = {
		uri: url,
		headers: {"Content-type": "application/json"},
		json: {"text": mes}
	};
	console.log('postします:' + mes);
	request.post(options, function(error, response, body){});
}

//send("start myNgrok");

exports.send = send;

