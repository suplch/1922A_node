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
// 创建 一个水果
// Goods.create({name: '香蕉', price: 10, pic: '🍌'}).then(function (result) {
//     console.log('商品创建成功', result)
// }).catch(function(err) {
//     console.log('商品创建失败: 原因:', err);
// })

async function initDb() {
    let ret;
    ret = await Goods.create({name: '香蕉', price: 10, pic: '🍌'});
    console.log(ret);
    ret = await Goods.create({name: '栗子', price: 20, pic: '🌰'})
    console.log(ret);
    ret = await Goods.create({name: '橙子', price: 30, pic: '🍊'})
    console.log(ret);
    ret = await Goods.create({name: '樱桃', price: 20, pic: '🍒'})
    console.log(ret);
    ret = await Goods.create({name: '荔枝', price: 20, pic: ''})
    console.log(ret);
    // 关闭 mongodb 的连接
    mongoose.connection.close();
}

initDb();

