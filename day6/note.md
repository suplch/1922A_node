### nodejs 基本介绍
+ 服务端 javascript执行平台
+ 会NodeJS 有什么好处
    - 可以更好的掌握前端技术
    - 可以开发 web 服务器, 
    - 可以开发命令行工具, (比如 gulp, webpack 等打包工具就是nodejs 开发的)
### 环境安装(node nvm, npm)
    官网 https://nodejs.org/en/
    中文 http://nodejs.cn/api/
### REPL 环境的使用
    交互式命令
### js文件的执行方式
- js 单线程执行
- 异步任务, 同步任务

    
### 模块/包与commonjs 规范
- 内置  (系统自带, node安装好就已经存在)
- 第三方模块 (被安装在 node-modules 文件夹中)
    + npm init
    + npm install 模块名 --save
    + npm uninstall 模块名
- 自定义 (项目里独立的js文件, 根据commonjs 规范定义)

### 内置模块详解
- 全局变量
    + __dirname  当前js文件所在的路径
    + __filename   当前js文件的完整路径 包括文件名
- Path 文件路径
    + path.join
    + path.resolve
    + path.extname
- process 进程对象
    + process.argv 返回命令行参数数组
    + process.exit 退出程序
- FS 文件操作
    + require('fs') 模块
    + fs.existsSync(path) 检查文件是否存在
    + fs.readFile 与 fs.readFileSync(path, encoding)
    + fs.writeFile 与 fs.writeFileSync(path)
    + 小案例 (统计英文单词频率)
- Stream
    + fs.createReadStream(path);
    + fs.createWriteStream(path);
    + stream pipe 管道
    + 小案例 (实现一个文件copy)
- Event
    + require('events');
    + events.on(eventName, function(data){})
    + events.emit(eventName, data)
- Http(s) (爬虫)
    + http.get('url', handler)
    + http.request(options)
    + cheerio模块 解析返回的html结果
    + 小案例 (爬取 一个网站内容)
- Promise
    + 让异步操作更简单
    + async await
- Url
    + url 介绍
    + parse
    + format
- Query String
    + parse
    + stringify
    + escape
    + unescape


### 服务器相关知识
    - 什么是web服务器
    - 前后端分离与耦合架构概念
        + 前后端混合开发, 例如 传统的php, jsp
        + 分离开发, JavaScript渲染页面, 通过ajax 方式访问后台数据, 服务端只提供数据接口
        + 分离的好处, 后台的服务接口可重用, 比如可以给 android, ios, web 前端提供统一的数据
    - Http 静态web服务器
        + MIME 类型
            - text/html
            - text/css
            - image/gif
            - image/png
            - image/jpeg
            - application/javascript
            - video/mp4

### Express 基础
    - Express 介绍
    - 静态资源托管
    -  npm install express --save-dev

### 中间件 链式处理请求
    - 1 express.static
    - 2 require('body-parser').json()
    - 3 如何自定义中间件
    - 4 模板引擎EJS

### 路由
    - 1 路由的本质也是一个中间件

### nodemon 实时监听
    - npm install nodemon --save
    - nodemon test.js

作业
用nodejs 遍历目录树 (参考 nodejs.org 官网 文档 fs.readdir)
将二阶段的前端项目部署到 express 中


晚自习: 
考试面试题
安装 MongoDB 数据库软件
