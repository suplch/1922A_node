// 统计 从 m 加到 n 的和
function sum(m, n) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total = total + i;
    }
    return total;
}

function add(a, b) {
    return a + b;
}

// module 也是 commonjs 规范定义的模块化方式
// module.exports = sum;  // 仅仅导出 一个 sum 函数

// 凡是赋值 给 module.exports 的变量完全被导出
module.exports = {
    sum: sum,
    add: add
};
