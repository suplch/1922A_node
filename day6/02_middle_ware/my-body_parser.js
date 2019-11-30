
// 自定义 json 解析中间件
module.exports = {
    json: function() {
        return function(request, response, next) {
            console.log('我们自己开发的 body parser 中间件');
            // 判断 提交方式为post 才试图处理 请求体数据
            if (request.method === 'POST') {
                let jsonStr = '';
                // 我们可以通过  request on data  来提取浏览器 提交的数据
                request.on('data', function(chunk) {
                    // 将吃到的数据块 累加
                    jsonStr = jsonStr + chunk.toString();
                })
                request.on('end', function() {
                    // 将提交 的 json 字符串 解析为 js 对象
                    // 将其保存 到 request 对象上
                    request.body = JSON.parse(jsonStr);
                    // next 继续下一步
                    next();
                })
            } else {
                // 直接下一步
                next();
            }
        }
    }
}