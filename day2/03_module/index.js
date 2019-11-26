// 加载 第三方 模块
const cheerio = require('cheerio');

const $ = cheerio.load(`
    <div>
        <header> hello world</header>
        <section>
            欢迎光临
        </section>
        课程
        <ul>
            <li>JavaScript</li>
            <li>Css</li>
            <li>Node</li>
        </ul>
    </div>
`);

const hd = $('header').text();
console.log(hd);

const msg = $('section').text();
console.log(msg);

const list = $('ul > li');

// console.log(list.length);
// console.log(list[0].children[0].data);
// console.log(list[1].children[0].data);

for (let i = 0; i < list.length; i++) {
    let li = list[i];
    console.log(li.children[0].data)
}


