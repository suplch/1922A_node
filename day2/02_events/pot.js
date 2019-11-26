/*
*
* 作者: 一个大牛程序猿
* */
// 引入 events node 原生模块, 用来实现 事件处理相关的逻辑
const EventEmitter = require('events');
// 继承  EventEmitter 方法功能
class Pot extends EventEmitter {
    constructor() {
        super();
        this.temperature = 20;
    }

    incrementTemperature() {
        if (this.temperature + 10 <= 100) {
            this.temperature += 10;
            // 广播 一个 事件 正在加热   表示 当前的状态
            this.emit('正在加热', this.temperature);
        } else {
            this.temperature = 100;
        }
        if (this.temperature === 100) {
            // 当温度 达到 100  是 广播一个事件  事件的名称  水开了
            this.emit('水开了');
        }
    }
}

// 导出一个对象
module.exports = {
    createPot() {
        let pot = new Pot();

        setInterval(function () {
            pot.incrementTemperature();
        }, 1000);

        return pot;
    }
};
