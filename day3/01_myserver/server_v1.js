// 引入 http 模块, 用来创建 web 服务器
const http = require('http');

// createServer 用来创建web服务器
// request 表示一个客户端 浏览器 的请求
// response  表示 服务器 对 客户端浏览器的 响应
// 当一个 浏览器的请求 上来以后, 服务器会自动调用 回调函数
const server = http.createServer(function (request, response) {
    console.log('一个客户端请求 来了');
    // 将 hello world 这个字符串, 写入响应流
    response.write('hello world');

    // 调用 end方法 表示 响应结束;
    response.end();
});

// 监听 5000 端口号
server.listen(5000, function (err) {
    if (err) {
        // err.message 表示 具体的错误信息
        console.log(err.message);
        return;
    }

    console.log(`请访问 http://localhost:5000`);
});
