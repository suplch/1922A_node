// 引入 events node 原生模块, 用来实现 事件处理相关的逻辑
const EventEmitter = require('events');

// 实例化一个 事件处理对象
const myEvent = new EventEmitter();

// 监听 <<我饿了>> 这件事, 如果发生那么执行 回调函数
myEvent.on('我饿了', function () {
    console.log('要吃🍚');
});
// 监听 <<我饿了>> 这件事, 如果发生那么执行 回调函数
myEvent.on('我饿了', function () {
    console.log('要吃大饼');
});
// 监听 <<我渴了>> 这件事, 如果发生那么执行 回调函数
myEvent.on('我渴了', function () {
    console.log('喝点水')
});
// 监听 <<我渴了>> 这件事, 如果发生那么执行 回调函数
myEvent.on('我渴了', function () {
    console.log('喝可乐')
});

myEvent.on('开饭了', function (food) {
    console.log('好丰盛', food);
})

myEvent.emit('我饿了');
myEvent.emit('我饿了');
myEvent.emit('我饿了');

myEvent.emit('我渴了');

myEvent.emit('开饭了', '🍚🍌🌰🍊')
