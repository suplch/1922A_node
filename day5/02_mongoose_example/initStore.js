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



// 准备产品数据
const product_type_list = [
    {
        name: '主食',
        items: [
            {name: '泡菜鸡腿堡双人餐', price: 69.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/699_820687.jpg'},
            {name: '泡菜堡薯单人餐', price: 36.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/688_793370.jpg'},
            {name: '泡菜卷鸡柳单人餐', price: 34.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/688_793371.jpg'},
            {name: '芝士培根澳牛堡', price: 27.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/635_670374.jpg'},
        ]
    }, {
        name: '茶点',
        items: [
            {name: '葡式蛋挞经度', price: 8.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_582064.jpg'},
            {name: '香脆薯饼', price: 7.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_581424.jpg'},
            {name: '安心大油条', price: 6.5, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_580942.jpg'},
            {name: '香甜粟米棒', price: 8.5, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_585896.jpg'},
            {name: '芙蓉荟蔬汤', price: 8.5, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_581829.jpg'},
            {name: '波纹霸王薯条(大)', price: 14.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_585895.jpg'},
        ]
    }, {
        name: '饮料',
        items: [
            {name: '百事可乐(中)', price: 9.5, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_583035.jpg'},
            {name: '九龙金玉珍珠奶茶', price: 14.5, pic: 'https://img.4008823823.com.cn/kfcios/Version/693_805660.jpg'},
            {name: '伴柠伴桔鲜果茶', price: 13.5, pic: 'https://img.4008823823.com.cn/kfcios/Version/609_593800.jpg'},
            {name: '九珍果汁饮料', price: 12.0, pic: 'https://img.4008823823.com.cn/kfcios/Version/604_585877.jpg'},
        ]
    }
];

// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);
const ProductType = mongoose.model('ProductType', ProductTypeSchema);


async function saveToDB() {
    await ProductType.deleteMany().exec();
    await Product.deleteMany().exec();

    // 遍历数组 将数据保持到 mongodb 数据库中
    for (let type of product_type_list) {
        const productType = await ProductType.create({name: type.name});

        for (let item of type.items) {
            await Product.create({name: item.name, price: item.price, pic: item.pic, type_id: productType._id});
            //await Product.create({...item, type_id: productType._id});
        }
    }
}

saveToDB().then(function () {
    console.log('数据初始化成功');
    mongoose.connection.close();
});

