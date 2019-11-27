// 引入 http 模块, 用来创建 web 服务器
const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
    '.js': 'application/javascript; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
};

// createServer 用来创建web服务器
// request 表示一个客户端 浏览器 的请求
// response  表示 服务器 对 客户端浏览器的 响应
// 当一个 浏览器的请求 上来以后, 服务器会自动调用 回调函数
const server = http.createServer(function (request, response) {
    console.log('一个客户端请求 来了');
    // request.url 就是 网址 后面根的 请求的具体地址 路径
    console.log(request.url);
    let filepath = './static' + request.url;
    // existsSync 函数用来判断 一个文件是否存在
    if (fs.existsSync(filepath)) {
        let extname = path.extname(filepath);
        fs.readFile(filepath, function (err, data) {
            if (err) {
                // 万一出错了, 给用户 一个友好的提示
                response.writeHead(200, {
                    "Content-Type": 'text/plain; charset=utf-8',
                });
                response.write('出错了, 工程师在努力解决');
                response.end();
                return;
            }
            // 动态的获取 对应文件 可 mime 表达方式
            let mimeString = MIME[extname];
            // 将读取到的文件内容 响应给 浏览器
            response.writeHead(200, {
                "Content-Type": mimeString,
            });
            response.write(data);
            response.end();
        })
    } else {
        response.writeHead(200, {
            "Content-Type": 'text/plain; charset=utf-8',
        });
        response.write('网页不存在 404');
        response.end();
    }
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
