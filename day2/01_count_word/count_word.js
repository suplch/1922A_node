
const fs = require('fs');

fs.readFile('../assets/english.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(typeof data);

    // string split 用来分格字符串, 返回 一个数组
    const words = data.split(/\W+/);

    //console.log(words);

    let map = new Map();
    for (word of words) {
        if (!word) {
            continue;
        }
        // 先判断, 如果 map 里面 没有 单词, 先 把单词放进去
        if (!map.has(word)) {
            map.set(word, 0);
        }

        // 取出 map 里面原先保持 的 单词对应的 数量
        let count = map.get(word);
        // 把数量 加一
        count = count + 1;
        // 把 数量 放回去
        map.set(word, count);

        //console.log(word)
    }

    //console.log(map)

    // 返回 map 里边所有 属性名称
    let keys = map.keys();

    let result = [];
    for (key of keys) {
        //console.log(`${key} : ${map.get(key)}`)
        let wordCount = {
            word: key,
            count: map.get(key)
        };
        result.push(wordCount);
        //result.push(`${key} : ${map.get(key)}`);
    }

    console.log(result);
    console.log('========================')
    // sort 是数组的一个 方法 用来 排序数组, 她的内部已经实现了排序算法,
    // 他提供了一个 回调函数, 让我们程序猿,来决定 具体的排序规则
    result.sort(function (a, b) {
        return b.count - a.count
        //return b.word.length - a.word.length;
    });

    console.log(result);

    let newResult = result.map(function (item) {
        return item.word + '        ' + item.count
    });

    console.log(newResult)

    let txt = newResult.join('\n')

    console.log(newResult);


    fs.writeFile('./counter.txt', txt, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('统计完毕😃')
    });


});
