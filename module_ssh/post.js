var request = require('request');


var send=function(mes){
	var options = {
		uri: "https://hooks.slack.com/services/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",
		headers: {"Content-type": "application/json"},
		json: {
				"text": mes,
				"username":'botman',
		}
	};
	request.post(options, function(error, response, body){});
}


send("start bot");

exports.send = send;

