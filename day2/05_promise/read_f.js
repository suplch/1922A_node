
const fs = require('fs');

let sentences = [];

console.log('aaa');
fs.readFile('./assets/f1.txt', 'utf-8', function (err, result) {
    console.log('bbb');
    sentences.push(result);
    fs.readFile('./assets/f2.txt', 'utf-8', function (err, result) {
        console.log('ccc');
        sentences.push(result);
        fs.readFile('./assets/f3.txt', 'utf-8', function (err, result) {
            console.log('ddd');
            sentences.push(result);
            fs.readFile('./assets/f4.txt', 'utf-8', function (err, result) {
                console.log('eee');
                sentences.push(result);
                console.log(sentences)
            });
            console.log('fff')
        });
        console.log('gggg')
    });
    console.log('hhhh')
});
console.log('iiii');


