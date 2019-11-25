// console 输出 消息
console.log('Hello world!!!');

let a = 100;
let b = 200;

let c = a + b;

console.log(c);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function sum(m, n) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total = total + i;
    }
    return total;
}

let result = sum(1, 100);
console.log(result);

result = sum(100, 200);
console.log(result);
