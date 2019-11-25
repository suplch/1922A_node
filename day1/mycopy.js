// 获取 node 自带的  path 模块 用来处理 路径
const path = require('path');
// 获取 node自带的 fs 模块 用来处理 文件
const fs = require('fs');
// process  是 nodejs 提供的一个全局变量, 里面有一些关于进程的信息
//console.log(process.argv);

// path.resolve 方法 由来将一个相对路径 解析为 绝对路径
//const mp4Path = path.resolve('./assets/zyfx.mp4')
const mp4Path = path.resolve(process.argv[2]);
console.log(mp4Path);
// 创建一个文件读取流, 从指定的文件 读取数据
const readStream = fs.createReadStream(mp4Path);
//const targetMp4Path = path.resolve('./target/自由飞翔.mp4');
const targetMp4Path = path.resolve(process.argv[3]);

// 创建一个输出流, 将数据输出到指定的文件
const writeStream = fs.createWriteStream(targetMp4Path);
// 读取流对象 通过 pipe 管道函数 接到 输出流, 将原始数据传递到目标文件
readStream.pipe(writeStream);
