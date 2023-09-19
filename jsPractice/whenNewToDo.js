// new 一个对象的时候做的事情
// 1. 创建一个新对象
// 2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
// 3. 执行构造函数中的代码（为这个新对象添加属性）
// 4. 返回新对象
function Person (name) {
    this.name = name
}
Person.prototype.getName = function () {
    return this.name
}
const objectFactory = function () {
    const obj = new Object() // 创建一个新对象
    const Constructor = [].shift.call(arguments) //从参数中取出构造函数，此时arguments只剩下构造函数的参数
    obj.__proto__ = Constructor.prototype // 将新对象的原型指向构造函数的原型，这样新对象就可以访问构造函数原型中的属性
    const ret = Constructor.apply(obj, arguments) // 执行构造函数，将属性添加到新对象中
    return typeof ret === 'object' ? ret : obj
}
let a = objectFactory(Person, 'sven')
console.log(a.name)
console.log(a.getName())