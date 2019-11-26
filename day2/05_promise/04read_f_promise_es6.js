
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

async function run() {
    try {
        sentences.push(await readF('./assets/f1.txt'));
        sentences.push(await readF('./assets/f2.txt'));
        sentences.push(await readF('./assets/f3.txt'));
        sentences.push(await readF('./assets/f4.txt'));
        console.log(sentences);
    } catch (err) {
        console.log(err);
    }
}

run();
