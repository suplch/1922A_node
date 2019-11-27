// 引入 express 模块 用来 快速搭建我们的 web 服务器
const express = require('express');
// 处理路径的模块
const path = require('path');
// 调用 express 函数 返回一个 app 实例
const app = express();
// 返回 静态资源的路径
let staticPath = path.join(__dirname, 'public');
// 创建一个处理 静态资源的  ***中间件***
const staticMiddleWare = express.static(staticPath);
// 使用 静态资源中间件
app.use(staticMiddleWare);
// 绑定一个 path 路径, 当浏览器访问这个路径的时候, 那么 后面的回调函数将被调用
app.get('/hello', function (request, response) {
    response.send("hello World")
});
app.get('/userinfo', function (request, response) {
    // 响应 一个 js 对象, 框架会 自动将其转换为 json 字符串
    response.send({
        name: '张三',
        age: 18
    });
});
const port = 5000;
// 通过 app 实例, 监听 一个端口号
app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动 请访问 http://localhost:' + port);
});
