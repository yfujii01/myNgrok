var ngrok = require('ngrok');
var post = require('./post');

(async () => {
	await ngrok.disconnect();
	const url = await ngrok.connect({
		proto: 'http', 
		addr: 80,
	});
	console.log(url);
	post.send(url);
})();

