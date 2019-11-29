const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store',  { useUnifiedTopology: true, useNewUrlParser: true });

// 定义产品的数据模型结构
const ProductSchema = mongoose.Schema({
    name: String, price: Number, pic: String
});

// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);

/*
* 方式一
* 将价格 大于 20 的 统一修改为 0
* */
// Product.updateMany({price: {$lt: 20}}, {price: 0}, function (err, rows) {
//     if (err) return console.error(err);
//     console.log('价格小于 20 清零');
//     console.log(rows);
//     mongoose.connection.close();
// });


/*
*  方式二
*  将 表中 价格 price 调整为 整数
* */
const query = Product.find();

query.exec().then(async function (products) {

    for (let product of products) {
        if (product.price !== Math.floor(product.price)) {
            product.price = Math.floor(product.price);
            await product.save();
        }
    }
    mongoose.connection.close();

}).catch(function (error) {
    console.error(error);
});
