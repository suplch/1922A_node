

function ajax(url, method) {
    console.log(`正在从 ${url} 通过 ${method} 方式 获取数据....`)
}

// 凡是赋值 给 module.exports 的变量完全被导出
module.exports = ajax;
