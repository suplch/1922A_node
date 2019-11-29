const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store',  { useUnifiedTopology: true, useNewUrlParser: true });

// 定义产品的数据模型结构
const ProductSchema = mongoose.Schema({
    name: String, price: Number, pic: String
});

// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);

// 查询价格大于20 元的 产品 所有数据
// Product.find({price: {$gt: 20}}, function (err, products) {
//     if (err) return console.error(err);
//     console.log(products);
// });

// 查询价格大于20 元的 产品 所有数据
// 返回 query 对象
// const query = Product.find({price: {$gt: 20}});
// query.exec(function (err, result) {
//     if (err) return console.error(err);
//     console.log(result);
// });


// 查询价格大于20 元的 产品 所有数据
// 返回 query 对象
const query = Product.find({price: {$gt: 20}});
query.exec().then(function (result) {
    console.log(result);
    mongoose.connection.close();
}).catch(function (error) {
    console.error(error);
});
