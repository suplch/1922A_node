
const fs = require('fs');

let sentences = [];

function readF(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            // 把读取到的文件内容 返回
            resolve(result)
        })
    });
}


let promise = readF('./assets/f1.txt');
console.log('aaaa');
promise.then(function (result) {
    console.log('bbbb');
    console.log('成功: ', result);
    sentences.push(result);
    return readF('./assets/f2.txt');
}).then(function (result) {
    console.log('cccc');
    sentences.push(result);
    return readF('./assets/f3.txt');
}).then(function (result) {
    console.log('ddd');
    sentences.push(result);
    return readF('./assets/f4.txt');
}).then(function (result) {
    console.log('eee');
    sentences.push(result);
    console.log(sentences);
}).catch(function (err) {
    console.log(err)
});


