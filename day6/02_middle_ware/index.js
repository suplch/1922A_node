
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.json());
// 使用中间件函数
app.use(function(request, response, next) {
    console.log('中间件被调用')

    if (request.method === 'POST') {
        // ....
        // ....
        request.body = {name: '张三'}
    }

    next();
});

app.use(function(request, response, next) {
    // if (当前用户 登录 那么)
    // else 

    if (request.url === '/userinfo') {
        if (user.islogined) {
            next();
        } else {
            response.send({
                msg: '请重新登录'
            })
        }
    } else {
        next();
    }


});

app.get('/hello', function(request, response) {
    console.log('hello 服务被调用');
    response.send({
        msg: 'hello 世界'
    });
})

app.get('/userinfo', function(request, response) {
    console.log('user info 被调用')
    response.send({name: '张三'});
})

app.listen(5000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务启动成功: http://localhost:5000');
});