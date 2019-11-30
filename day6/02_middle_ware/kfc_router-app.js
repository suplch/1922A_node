const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
// bodyParser 是一个 解析 post 提交 json 的中间件
const bodyParser = require('body-parser');
const myBodyParser = require('./my-body_parser');


mongoose.connect('mongodb://localhost/store');

const ObjectId = mongoose.Types.ObjectId;


const ProductTypeSchema = mongoose.Schema({
    name: String
});

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    pic: String
})

// 产品类对象
const ProductType = mongoose.model('ProductType', ProductTypeSchema);
const Product = mongoose.model('Product', ProductSchema)

// 静态资源路径
const publicRoot = path.join(__dirname, 'public')
// 静态资源中间件
const staticMiddleware = express.static(publicRoot);

const app = express();


// 使用 json 解析 中间件
//app.use(bodyParser.json())
app.use(myBodyParser.json())
app.use(staticMiddleware);

// 导入 不同的业务功能 路由模块
const auth = require('./router/auth');
const product = require('./router/product');
// 使用 路由 中间件
app.use('/auth', auth)
app.use('/product', product)


const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动 请访问 http://localhost:' + port);
})

