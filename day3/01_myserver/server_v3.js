// 引入 http 模块, 用来创建 web 服务器
const http = require('http');
const fs = require('fs');


// createServer 用来创建web服务器
// request 表示一个客户端 浏览器 的请求
// response  表示 服务器 对 客户端浏览器的 响应
// 当一个 浏览器的请求 上来以后, 服务器会自动调用 回调函数
const server = http.createServer(function (request, response) {
    console.log('一个客户端请求 来了');
    // 将 hello world 这个字符串, 写入响应流
    // request.url 就是 网址 后面根的 请求的具体地址 路径
    console.log(request.url);

    if (request.url === '/index.html') {

        // 读取 文件内容
        fs.readFile('./static/index.html', 'utf-8', function (err, data) {
            if (err) {
                // 万一出错了, 给用户 一个友好的提示
                response.write('出错了, 工程师在努力解决');
                response.end();
                return;
            }
            // 将读取到的文件内容 响应给 浏览器
            response.write(data);
            response.end();
        });

    } else if (request.url === '/css/style.css') {

        fs.readFile('./static/css/style.css', 'utf-8', function (err, data) {
            if (err) {
                // 万一出错了, 给用户 一个友好的提示
                response.write('出错了, 工程师在努力解决');
                response.end();
                return;
            }
            // 将读取到的文件内容 响应给 浏览器
            response.write(data);
            response.end();
        })
    } else if (request.url === '/js/msg.js') {
        fs.readFile('./static/js/msg.js', 'utf-8', function (err, data) {
            if (err) {
                // 万一出错了, 给用户 一个友好的提示
                response.write('出错了, 工程师在努力解决');
                response.end();
                return;
            }
            // 将读取到的文件内容 响应给 浏览器
            response.write(data);
            response.end();
        })
    } else {
        response.write("Not Found 404");
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
