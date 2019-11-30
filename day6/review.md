### nodejs 环境安装
## 系统里面有一个 全局命令 node
```
// 通过 node 命令来执行 javascript 文件

node环境提供了, 访问操作系统的很多功能
例如 文件访问, 进程管理, 网络请求 等
node ./app.js

```
对比浏览器
```
浏览器里面的js 的目的是 控制界面的显示,
发起 ajax请求获取数据
<script src="./app.js"></script>
<script>
    alert();
</script>
```

## 通过 node 命令执行 js
- commonjs 模块规范,  用来大规模的组织我们 代码
    + module.exports   通过给这个 属性赋值 表示 要导出的 对象 函数 等
    + require()        用来获取 被导出的对象 或 函数
        +  require(系统自带的模块名)  返回 node 自带的模块
        +  require('第三方模块')    需要我们 npm install 第三方模块
        +  require('相对路径')      返回我们自定义的模块, 也就是  module.exports 导出的东西
- 全局变量
    + dirname      表示当前 js 文件所在的那个文件夹 的 路径
    + filename     表示 当前 js 的文件名 (包括路径)
- require('path')  用来处理路径的 模块
    + join      连接目录
    + resolve   用来将相对路径 解析为绝对路径
    + extname   获取文件扩展名
- require('fs') 用来处理文件系统
    + readFile
    + writeFile
    + readStream;
        - on('data', function(chunk) {....})
        - on('end', function() { ...  })
    + writeStream;
        - write(chunk)
- require('http'), require('https')  用来处理 http 协议的 服务
    + http.get     // 获取 网络上的数据, 利用他可以实现 爬虫
    + http.get('http://www.baidu.com', function(response) {  response // 实际是一个 readStream      })
    + https.get('https://www.baidu.com/img/bd_logo1.png' , function(response) {})
    ```
        const writeStream = fs.createWriteStream('d:\image\百度.png');
        https.get('https://www.baidu.com/img/bd_logo1.png' , function(response) {
            response.pipe(writeStream)
        })
    ```
    + http.createServer(function(request, response) {})  // 创造一个web 服务器
    + request   // 代表一个客户端 浏览器的请求, 也就是 用户发过的数据, 也是一个 readStrea
    + response  // 代表 服务器 对 客户端浏览器的响应,
- require('cheerio')   //  用来解析 html  返回一个 类似于 jquery 的一个对象, 我们可以快速大查询 内容
- require(express)     // express 是一个用来开始开发 web 服务器的框架, 简化提供程序猿的开发效率 
    + express() 调用 返回 app 实例
    + app.get('/path', function(request, response){})   监听 get 请求
    + app.post(...)  监听 post 请求
    + request  被 express框框 扩展过的request
    + response  被 express 框架 扩展过
    + express.static('d:/public') // 创建一个处理 静态网页资源的中间件
    + require('body-parser')   // 解析 post 请求 上来的 json 数据
    + app.use(function(request, response, next){}) // app.use 用来注册一个中间件, 用来预处理 客户发请求
        - 如果 用户调用了 next 函数, 代表 继续下一步
    + 路由: 通过不同的路径 访问不同的资源, 返回不同的数据
    + const product = express.Router() // 创建一个路由中间件, 用来区分不同的业务功能模块
    + product.get('/list', function(request, response){})
    + app.use('/product', product);
