const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store',  { useUnifiedTopology: true, useNewUrlParser: true });

// 定义产品的数据模型结构
const ProductSchema = mongoose.Schema({
    name: String, price: Number, pic: String
});

// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);

// 查询所有数据
Product.find(function (err, products) {
    if (err) return console.error(err);
    console.log(products);
    mongoose.connection.close();
});
