

const getMe1000000Promise = new Promise(function (resolve, reject) {

    if (Math.random() < 0.1) {
        reject('破产了')
    } else {
        resolve(1000000);
    }
});


getMe1000000Promise.then(function (result) {
    console.log('成功: ', result);
}).catch(function (err) {
    console.log('失败: ', err)
});
