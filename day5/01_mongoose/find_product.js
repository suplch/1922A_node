// 引入 mongoose 第三方模块, 方便进行 mongodb 增删改查
const mongoose = require('mongoose');

// 连接mongodb 数据库, 默认端口 27017  数据库  shop
mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true });

// 定义 商品的 模型
const GoodsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    pic: String
})

// 通过 商品的模型 创建 商品类 名称 Goods
const Goods = mongoose.model('Goods', GoodsSchema);

// 查询的 第一种用法
/*
Goods.find(function(err, results) {
    if (err) {
        console.log(err);
        return;
    }
    //console.log(results);
    for (let product of results) {
        console.log(product._id, product.name, product.price, product.pic);
    }
    mongoose.connection.close();
});
*/

// 调用 find 方法, 但是 不传递回调函数, 那么 他将返回一个 query 对象
let query = Goods.find();

// 开始执行 查询  返回 promise 对象, 通过 等待 promise 对象 拿到结果
/*
query.exec().then(function(results) {
    console.log(results);

    mongoose.connection.close();
})
*/

async function findAll() {
    // 等待 执行结果
    //let results = await query.exec();
    let results = await Goods.find().exec();
    console.log(results);
    // 关闭数据库
    mongoose.connection.close();
}

findAll();