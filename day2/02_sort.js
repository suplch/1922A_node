
let students = [
    {name: '赵六', age: 30, score: 75},
    {name: '李四', age: 28, score: 98},
    {name: '王五', age: 20, score: 80},
    {name: '张三', age: 18, score: 100},
    {name: '小二', age: 8, score: 90},
];

console.log(students);
console.log('---------------------------');

students.sort(function (a, b) {
    return b.age - a.age;
});


console.log(students);
