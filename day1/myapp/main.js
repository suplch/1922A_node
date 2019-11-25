// require 函数 是 commonjs 规范所规定的一个模块化方式
// 给 require() 提供一个 字符串路径参数, 告诉你希望引用的js文件
let obj = require('./calculator.js');
// obj 里面拥有 两个属性 sum, add

let result = obj.sum(1, 100);

console.log(result);


result = obj.add(5, 6);
console.log(result);

// 获取getdata.js 提供的 函数
let ajax = require('./server/getdata.js');

ajax('http://www.baidu.com', 'GET');
