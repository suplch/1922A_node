// 引入 events node 原生模块, 用来实现 事件处理相关的逻辑
const EventEmitter = require('events');

// 实例化一个 事件处理对象
const readStream = new EventEmitter();

// 监听 data 事件, 当 data 事件触发, 那么执行 回调函数
readStream.on('data', function (chunk) {
    console.log('获取数据', chunk)
});

readStream.on('end', function () {
    console.log('结束')
});

//  触发 data 事件, 传递 事件参数
readStream.emit('data', 'hello');
readStream.emit('data', 'good');
readStream.emit('data', 'hi');
readStream.emit('data', 'bye');
readStream.emit('data', 'ok');


readStream.emit('end');


