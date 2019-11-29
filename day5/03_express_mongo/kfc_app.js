const path = require('path');
const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://localhost/store');

const ProductTypeSchema = mongoose.Schema({
    name: String
});
// 产品类对象
const ProductType = mongoose.model('ProductType', ProductTypeSchema);


// 静态资源路径
const publicRoot = path.join(__dirname, 'public')
// 静态资源中间件
const staticMiddleware = express.static(publicRoot);

const app = express();

// 声明注册一个 get 请求, 后边是 回调函数, 当浏览器 发起 一个 get 请求, 请求地址 是 /userinfo 的时候 调用
app.get('/userinfo', function (request, response) {
    response.send({
        name: '张三',
        age: 18,
        sex: '男'
    })
})

app.get('/get_product_type', async function (request, response) {
    // 获取 productTypes 数据
    let productTypeList = await ProductType.find().exec();
    // 将查询的结果 发送给浏览器
    response.send(productTypeList);
})

app.use(staticMiddleware);

const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动 请访问 http://localhost:' + port);
})

