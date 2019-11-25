const https = require('https');
const fs = require('fs');

const cheerio = require('cheerio')

// 以get 请求 方式访问 新浪首页                          回调函数 参数返回 response 响应对象
https.get('https://www.sina.com.cn', function (response) {

    let html = '';


    // response 响应对象示意个 stream 流, 通过 on data  事件 返回 数据块
    response.on('data', function (data) {
        // 将数据库 追加到 html 变量里, 本事件会多次调用, 知道数据读取完成为止
        html = html +  data;
    });
    
    // 当数据流读取结束后, 会触发 end 事件,
    response.on('end', function () {

        // 当 end 事件触发后 本回调函数被执行, 此时 html 变量里就是所有的数据了
        // cheerio  是一个第三方模块 , 需要  npm install cheerio --save  安装
        const $ = cheerio.load(html);

        // let links = $('a');
        //
        // console.log(links.length)
        //
        // for (let i = 0;i < links.length; i++) {
        //     console.log($(links[i]).text(), links[i].attribs.href)
        //
        // }

        // $('img')  类似与一个jQuery api 的使用方式
        let imgs = $('img');
        for (let i = 0;i < imgs.length; i++) {
            console.log(imgs[i].attribs.src, imgs[i].attribs.alt)
        }


        console.log(imgs.length);

    })
});
