
console.log(add1(2, 3))

function add1(a, b) {
    return a + b;
}
var str = '';
var n = 100;
var m = 100 + 200

var add2 = function(a, b) {return a + b}
console.log(add2(2, 3))


function filter(items, conditionFn) {
    let words = [];
    for (let item of items) {
        if (conditionFn(item)) {
            words.push(item);
        }
    }
    return words;
}

let arr = ['hello', 'hi', 'good', 'morning', 'bye'];
let newarr = filter(arr, function(item) {
    return item.length >= 4;
});
console.log(newarr);
let arr2 = [{name:'张三', age: 18}, {name: '李四', age: 20}, {name: '王五', age: 22}]
let littleStudents = filter(arr2, function(student) {
    return student.age <= 20
})
console.log(littleStudents)

Array.prototype.my_filter = function(conditionFn) {
    let words = [];
    for (let item of this) {
        if (conditionFn(item)) {
            words.push(item);
        }
    }
    return words;
}

let littles = arr2.filter(function(stu) {
    return stu.age <= 20
});
console.log(littles);

littles = arr2.my_filter(function(stu) {
    return stu.age <= 20
});
console.log(littles);
console.log('-------------------------------------')

let words = ['hello', 'good', 'hi'];

Array.prototype.my_map = function(conditionFn) {
    let results = [];
    for (let item of this) {
        results.push(conditionFn(item))
    }
    return results;
}

let newwords = words.map(function(word) {
    if (word.length > 4) {
        return '<b style="color: red;">' +word + '</b>'
    } else {
        return '<span>' +word + '</span>'
    }
})
console.log(newwords)

newwords = words.my_map(function(word) {
    if (word.length > 4) {
        return '<b style="color: red;">' +word + '</b>'
    } else {
        return '<span>' +word + '</span>'
    }
})
console.log(newwords)