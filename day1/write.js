
const fs = require('fs');


// fs.writeFile('./assets/自我介绍.txt', "你好, 我叫张三", function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('写入成功');
// });

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(`第${i} 次 执行`)
}

let ret = arr.join('\n');

console.log(ret);
fs.writeFile('./assets/output.txt', ret, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('写入成功');
});
