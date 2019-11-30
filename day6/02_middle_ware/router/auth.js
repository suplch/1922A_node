const express = require('express');

const auth = express.Router();

// 登录
auth.get('/login', function(request, response) {
    response.send({msg: '登录成功'})
});
// 注册
auth.get('/register', function(request, response) {
    response.send({msg: '注册成功'})
});

auth.get('/forget_password', function(request, response) {
    
})

module.exports = auth;