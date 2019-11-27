// 引入 http 模块, 用来创建 web 服务器
const http = require('http');

// createServer 用来创建web服务器
// request 表示一个客户端 浏览器 的请求
// response  表示 服务器 对 客户端浏览器的 响应
// 当一个 浏览器的请求 上来以后, 服务器会自动调用 回调函数
const server = http.createServer(function (request, response) {
    console.log('一个客户端请求 来了');
    // 将 hello world 这个字符串, 写入响应流

    // request.url 就是 网址 后面根的 请求的具体地址 路径
    console.log(request.url);
    // 如果 url 属性 是 /index.html 表示用户想访问 首页内容
    if (request.url === '/index.html') {
        // writeHead 想响应流 写一个 头信息 200 表示成功 的 "状态码"
        // Content-Type 实际上是一个 响应头 信息  告诉浏览器, 本服务器 给你的是 什么内容 charset 编码格式
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        response.write(`
            <html>
                <body>
                    <h1>Home</h1>
                    <p>hello world!</p>
                    <ul>
                        <li>书包 🎒</li>
                        <li>电脑 💻</li>
                        <li>鼠标 🖱</li>
                    </ul>
                </body>
            </html>
        `);
    } else if (request.url === '/about.html') {
        // writeHead 想响应流 写一个 头信息 200 表示成功 的 "状态码"
        // Content-Type  告诉浏览器, 本服务器 给你的是 什么内容 charset 编码格式
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        response.write(`
            <html>
                <body style="color: red">
                    本网站 是国内最大的购物网站
                </body>
            </html>
        `);
    } else {  // 表示 没有页码给用户
        response.write('Not Fonund 404');
    }

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


//  https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=node&rsv_pq=dd1d5c5c00b31e13&rsv_t=dc08AjhpyJDatbAF%2Bd3ozkoLkCpJuDhwuUGZcAi5uPe3aVO1BspXucfsE48&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=4&rsv_sug7=101&rsv_sug2=0&inputT=899&rsv_sug4=1670&rsv_sug=1
