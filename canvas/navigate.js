function Person(name, height) {
  this.name = name
  this.height = height
  this.hobby = function () {
    return 'watching movies'
  }
}
var body = new Person('Keith', 180)
var gril = new Person('rascal', 153)
console.log(body.name)
console.log(gril.name)
console.log(body.hobby === gril.hobby)
// 原型对象上的所有属性和方法，都会被对象实例所共享
// 通过构造函数生成对象实例时，会将对象实例的原型指向构造函数的prototype属性。
// 每一个构造函数都有一个prototype属性，这个属性就是对象实例的原型对象
// 对象的属性和方法，有可能定义在自身，也有可能定义在它的原型对象。由于原型对象本身对于对象实例来说也是对象，它也有
// 自己的原型，所以形成了一条原型链（prototype chain）。所有一切的对象的原型顶端，收拾Object.prototype，即Object构造函数的prototype
// 属性指向的那个对象。
// 当然，Object.prototype对象也有自己的原型对象，那就是没有任何属性和方法的null对象，而null对象也没有自己的原型
