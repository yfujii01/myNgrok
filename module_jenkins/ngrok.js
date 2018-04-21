var ngrok = require('ngrok');
var post = require('./post');

(async () => {
	await ngrok.disconnect();
	const url = await ngrok.connect({
		proto: 'http', 
		addr: 7999,
	});
	console.log(url);
	post.send('jenkinsへの接続情報です\n' + url);
})();

