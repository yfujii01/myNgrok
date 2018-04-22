var ngrok = require('ngrok');
var post = require('../post');

(async () => {
	await ngrok.disconnect();
	const url = await ngrok.connect({
		proto: 'tcp', 
		addr: 22,
		region: 'ap'
	});

	var cmd;
	cmd = "sshの接続情報です\nssh pi@" + url.replace('tcp://','').replace('io:','io -p ');

	console.log(cmd);
	post.send(cmd);
})();

