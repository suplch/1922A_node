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
// updateOne 用来修改数据, 第一个参数是条件,  第二个参数用来指定 改什么
const query = Goods.updateOne({name: '橙子'}, {$set: { price: 50 }});

async function updateProduct() {
    // 等待执行结果
    let ret = await query.exec();
    console.log('产品修成功', ret);
    // 关闭数据库连接
    mongoose.connection.close();
}

//updateProduct();

async function updateProducts() {
    // 批量修改 产品
    let ret = await Goods.updateMany({name: /子$/}, {$set: {price: 0}}).exec()
    console.log('产品修改成功', ret);
    mongoose.connection.close();
}
updateProducts();

