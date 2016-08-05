/**
 * @Describe 一灯学堂PC端主入口文件
 * @Author yuanzhijia@yidengxuetang.com
 * @createTime 2016.06.19
 */

'use strict';
//去掉调试
// process.env.YOG_DEBUG = false;
let yog = require('yog2-kernel');
let app = yog.bootstrap({
	rootPath: __dirname
}, () => {
	console.log('plugins load completed');
});
app.set('port', process.env.PORT || 8085);
app.disable('x-powered-by');
let server = yog.server = app.listen(app.get('port'), () => {
	console.log('YD For pcweb server listening on port ' + server.address().port);
});
server.on('connection', (socket) => {
	// disable nagle
	socket.setNoDelay(true);
});
// 仅在 Node.js 6.x开启这个功能 https://github.com/nodejs/node/issues/7126
if (parseInt(process.versions.node.split('.')[0], 10) >= 6) {
	server.on('clientError', (err, socket) => {
		socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
	});
}