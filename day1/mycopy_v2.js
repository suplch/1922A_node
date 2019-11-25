//
const path = require('path');
const fs = require('fs');
// process  是 nodejs 提供的一个全局变量, 里面有一些关于进程的信息
console.log(process.argv);
// 如果 用户没有提供必要的参数, 那么 打印一些帮助提示信息
if (process.argv.length < 3) {
    console.log(`
        使用方式:
            node ./mycopy_v2.js 原始文件路径 目标文件路径
        例如:
            node ./mycopy_v2.js ../images/head.jpg ../icon/head.jpg
            将 父级目录下的images文件夹里的 head.jpg 复制 到 父级目录下的icon下的head.jpg
    `);
    // 退出程序 参数 0 告诉操作系统 程序正常退出
    process.exit(0);
}

// path.resolve 方法 由来将一个相对路径 解析为 绝对路径
//const mp4Path = path.resolve('./assets/zyfx.mp4')
const mp4Path = path.resolve(process.argv[2]);
//console.log(mp4Path);
// 创建一个文件读取流, 从指定的文件 读取数据
const readStream = fs.createReadStream(mp4Path);
//const targetMp4Path = path.resolve('./target/自由飞翔.mp4');
const targetMp4Path = path.resolve(process.argv[3]);

// 创建一个输出流, 将数据输出到指定的文件
const writeStream = fs.createWriteStream(targetMp4Path);

// data事件 当 读取流 读到数据, 就会触发, 回调函数将被调用, 传递过来一个 chunk 缓冲区
readStream.on('data', function (chunk) {
    //console.log('正在获取数据, 大小 ' + chunk.length);
    //console.log(chunk);
    // 把读到的 chunk 数据框, 写入 文件输出流
    writeStream.write(chunk)
});
// 当 end 事件触发以后, 表示, 已经没有数据了,
readStream.on('end', function () {
    // 关闭输出流
    writeStream.close();
});
