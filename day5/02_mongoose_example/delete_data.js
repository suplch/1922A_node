const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store',  { useUnifiedTopology: true, useNewUrlParser: true });

// 定义产品的数据模型结构
const ProductSchema = mongoose.Schema({
    name: String, price: Number, pic: String
});

// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);

const query = Product.find();

/*
*  通过 对象 remove 方法删除
* */
// query.exec().then(async function (products) {
//     for (let product of products) {
//         // 判断 如果 价格 < 20 元 将其删除
//         if (product.price < 20) {
//             console.log(product.constructor);
//             // 删除数据
//             await product.remove();
//         }
//     }
//     mongoose.connection.close();
// }).catch(function (error) {
//     console.error(error);
// });

/*
*  通过 模型 Model.remove 方法进行删除
* */

Product.deleteMany({price: {$gt: 20}}, function (err) {
    console.log('price 大于 20 的数据被删除');
    mongoose.connection.close();
});
