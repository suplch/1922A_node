// 计算 m 加到 n 的 结果
function sum(m, n) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total = total + i;
    }
    return total;
}
let result = sum(1, 100);
console.log('同步直接获取结果', result);
console.log('-------------------');
// 计算 m 加到 n 的 结果 通过同步回调
function sum222(m, n, callback) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total = total + i;
    }
    // 马上就在调用回调
    callback(total);
}
console.log('开始获取结果 通过回调');
sum222(1, 100, function (result) {
    console.log('同步回调获取结果', result);
});
console.log('执行结束');
console.log('-------------------');
// 异步获取结果
function sum333(m, n, callback) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total = total + i;
    }
    setTimeout(function () {
        callback(total);
    }, 3000)
}
console.log('************************');
console.log('开始获取结果 通过回调');
sum333(1, 100, function (result) {
    console.log('异步回调获取结果', result);
});
console.log('执行结束');
