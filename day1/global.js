// 系统提供 处理 路径 的模块
const path = require('path');

// 当前 js 文件所在的路径地址
console.log(__dirname)
// 当前js 文件 的 完整路径
console.log(__filename)

console.log('----------------')

let currentPath = path.resolve('.');
console.log(currentPath);
console.log('==================')

// path 模块 的 join 方法用来 拼接路径, 他会自动根据操作系统来 觉得用什么路径分隔符 / 或 \
let mp4Path = path.join(__dirname, 'assets', 'zyfx.mp4')
console.log(mp4Path);


let lessonappPath = path.join(__dirname, '..', '..', 'lesson-app')
console.log(lessonappPath);

console.log('==================')

let ext = path.extname(__filename);
console.log(ext);

ext = path.extname('/a/b/c/最炫.mp3');
console.log(ext);
