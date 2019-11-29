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

// 删除 pic 没有图片的产品
let query = Goods.deleteMany({pic: ''});

async function deleteProduct() {
    let ret = await query.exec();
    console.log('删除', ret);

    mongoose.connection.close();
}
deleteProduct();
