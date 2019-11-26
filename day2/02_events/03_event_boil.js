/*
*  一个小白 程序猿
* */
// 导入 一个 pot 对象
const pot = require('./pot');

let pot1 = pot.createPot();
// 监听 正在加热  这件事, 如果发生, 提示用户,
pot1.on('正在加热', function (temperature) {
    console.log('不要着急, 现在的温度是 ' + temperature + ' ℃, 请耐心等待...')
});
// 监听  水开了  这件事, 如果 发生  通知老板 过来 喝水
pot1.once('水开了', function () {
    console.log('沏茶, 慢慢享受');

    // sendEmail('boss@1000phone.com', "老板, 水开了, 过来喝茶")

});
