
var count = 1 // new Number(1);

console.log(count);

console.log(count.toFixed(5));

console.log(typeof count);

console.log(count.constructor);

console.log(count.constructor === Number)


var str = 'hello world';
console.log(str);
console.log(str.indexOf)

for (var p in str) {
    console.log(p);
}

var f1 = function(a, b) { return a + b  }

console.log(f1(4, 5))

var obj = {
    name: '张三',
    age: 18,
    eat: function() { console.log('正在吃饭') }
}

console.log(obj.name);

obj.eat()


let myarray = [18, 'hello', function() { console.log('😃')}];

console.log(myarray[0])
console.log(myarray[1])
console.log(myarray[2])

myarray[2]()

let myarray2 = [
    [18, 'hello', function() {console.log('🌰')}],
    [20, 'world', function() {console.log('🍊')},  function() { return function() { console.log('😓')} }   ]
]

console.log(myarray2[0][0])
console.log(myarray2[0][1])
console.log(myarray2[1][1])

myarray2[1][2]();

myarray2[1][3]()()[2][4]()


