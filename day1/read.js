
const fs = require('fs');

// 异步读取文件
fs.readFile('./assets/english.txt', 'utf-8', function (err, data) {
    // 检查如果有错误 打印错误
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
