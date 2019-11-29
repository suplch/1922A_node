const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/store',  { useUnifiedTopology: true, useNewUrlParser: true });

const ProductTypeSchema = mongoose.Schema({
    name: String
});

// 定义产品的数据模型结构
const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    pic: String,
    type_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'ProductType'
    }
});

// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);
const ProductType = mongoose.model('ProductType', ProductTypeSchema);

// 查询所有数据
Product.find().populate('type_id').exec().then(function (products) {
    for (let product of products) {
        console.log(product);
    }
}).catch(function (error) {
    console.error(error);
});
