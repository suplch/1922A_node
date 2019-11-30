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

app.get('/product_list', async function(request, response) {
    // equest.query.typeid 获取前端传递过来的 查询字符串 参数
    const typeid = request.query.typeid;
    // 传递 参数
    let productList = await Product.find({type_id: ObjectId(typeid)}).exec();
    response.send(productList);
})

app.post('/add_product', async function (request, response) {
    console.log(request.body);
    let ret = await ProductType.create({name: request.body.name});

    response.send(ret);
})

app.post('/delete_product', async function (request, response) {
    let typeid = request.body.typeId;

    let ret = await ProductType.deleteOne({_id: typeid}).exec()
    response.send(ret);
})



const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务已经启动 请访问 http://localhost:' + port);
})

